import { createClient } from '@supabase/supabase-js'
import { prisma } from '../lib/prisma'

async function syncAuthUsers() {
  // Create Supabase admin client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  try {
    // Get all users from Supabase Auth
    const { data: { users }, error } = await supabase.auth.admin.listUsers()

    if (error) {
      console.error('Error fetching users from Supabase:', error)
      return
    }

    console.log(`Found ${users?.length || 0} users in Supabase Auth`)

    if (!users || users.length === 0) {
      console.log('No users to sync')
      return
    }

    // Sync each user to Prisma database
    for (const user of users) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { id: user.id },
        })

        if (existingUser) {
          console.log(`User ${user.email} already exists in database`)
        } else {
          await prisma.user.create({
            data: {
              id: user.id,
              email: user.email!,
              name: user.user_metadata?.full_name || user.user_metadata?.name || null,
            },
          })
          console.log(`✓ Created user ${user.email} in database`)
        }
      } catch (err) {
        console.error(`Error syncing user ${user.email}:`, err)
      }
    }

    console.log('\nSync completed!')
  } catch (err) {
    console.error('Error syncing users:', err)
  } finally {
    await prisma.$disconnect()
  }
}

syncAuthUsers()

import { prisma } from '../lib/prisma'

// Replace these with your actual user details from Supabase Auth
const USER_ID = 'YOUR_SUPABASE_USER_ID' // Get this from Supabase Dashboard > Authentication > Users
const EMAIL = 'your-email@gmail.com'
const NAME = 'Your Name'

async function addUser() {
  try {
    console.log('Adding user to database...')
    console.log(`ID: ${USER_ID}`)
    console.log(`Email: ${EMAIL}`)
    console.log(`Name: ${NAME}`)

    const user = await prisma.user.create({
      data: {
        id: USER_ID,
        email: EMAIL,
        name: NAME,
      },
    })

    console.log('\n✓ User added successfully!')
    console.log(user)
  } catch (err) {
    console.error('Error adding user:', err)
  } finally {
    await prisma.$disconnect()
  }
}

addUser()

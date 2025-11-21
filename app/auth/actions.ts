'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        name: formData.get('name') as string,
      },
    },
  }

  const { data: authData, error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.message }
  }

  // Create user in Prisma database
  if (authData.user) {
    try {
      await prisma.user.create({
        data: {
          id: authData.user.id,
          email: authData.user.email!,
          name: data.options.data.name,
        },
      })
    } catch (err) {
      console.error('Error creating user in database:', err)
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signIn(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/auth/login')
}

export async function getCurrentUser() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        preferences: true,
      },
    })

    if (!dbUser) {
      try {
        const newUser = await prisma.user.create({
          data: {
            id: user.id,
            email: user.email!,
            name: user.user_metadata?.full_name || user.user_metadata?.name || null,
          },
        })
        return newUser
      } catch (createError) {
        console.error('Failed to create missing user:', createError)
        return null
      }
    }

    return dbUser
  } catch (err) {
    console.error('Error in getCurrentUser:', err)
    return null
  }
}

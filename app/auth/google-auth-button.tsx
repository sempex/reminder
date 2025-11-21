'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'

export default function GoogleAuthButton() {
  const [loading, setLoading] = useState(false)

  async function handleGoogleSignIn() {
    setLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })

    if (error) {
      console.error('Error signing in with Google:', error)
      setLoading(false)
    }
  }

  return (
    <Button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      variant="outline"
      className="w-full bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
    >
      <FcGoogle className="text-xl" />
      {loading ? 'Connecting...' : 'Continue with Google'}
    </Button>
  )
}

# Google OAuth Setup Guide

This guide will walk you through setting up Google OAuth authentication for your medication reminder app.

## Step 1: Create Google OAuth Credentials

### 1.1 Go to Google Cloud Console
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select an existing one

### 1.2 Enable Google+ API
1. In the left sidebar, go to **APIs & Services** → **Library**
2. Search for "Google+ API"
3. Click on it and press **Enable**

### 1.3 Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Select **External** user type and click **Create**
3. Fill in the required information:
   - **App name**: Your app name (e.g., "Medication Reminder")
   - **User support email**: Your email
   - **Developer contact information**: Your email
4. Click **Save and Continue**
5. On the **Scopes** page, click **Save and Continue** (no changes needed)
6. On the **Test users** page, you can add test users or skip
7. Click **Save and Continue** and then **Back to Dashboard**

### 1.4 Create OAuth Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** at the top
3. Select **OAuth client ID**
4. Choose **Web application** as the application type
5. Give it a name (e.g., "Medication Reminder Web")
6. Under **Authorized JavaScript origins**, add:
   - `http://localhost:3000` (for development)
   - Your production URL (e.g., `https://yourdomain.com`)
7. Under **Authorized redirect URIs**, add:
   - `http://localhost:3000/auth/callback` (for development)
   - `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback` (for Supabase)
   - Your production callback URL
8. Click **Create**
9. Copy the **Client ID** and **Client Secret** - you'll need these!

## Step 2: Configure Supabase

### 2.1 Add Google Provider in Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Providers**
3. Find **Google** in the list and click to expand
4. Enable the Google provider
5. Paste your **Client ID** (from Google Cloud Console)
6. Paste your **Client Secret** (from Google Cloud Console)
7. Click **Save**

### 2.2 Get Your Callback URL
1. In the same Supabase **Providers** → **Google** section
2. Copy the **Callback URL (for OAuth)** shown
3. It should look like: `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`
4. Go back to Google Cloud Console → Credentials
5. Edit your OAuth client
6. Make sure this Supabase callback URL is in the **Authorized redirect URIs** list
7. Click **Save**

## Step 3: Test Google OAuth

### 3.1 Start Your App
```bash
npm run dev
```

### 3.2 Test Login Flow
1. Navigate to `http://localhost:3000/auth/login`
2. Click **Continue with Google** button
3. You'll be redirected to Google sign-in
4. Sign in with your Google account
5. Grant permissions when prompted
6. You should be redirected back to your app and logged in!

### 3.3 Verify Database
After logging in with Google, verify the user was created:
```bash
npm run db:studio
```
Check the `User` table - you should see a new user with:
- Google account email
- Name from Google account
- Supabase Auth ID

## How It Works

### Authentication Flow:

1. **User clicks "Continue with Google"**
   - `GoogleAuthButton` component calls Supabase's `signInWithOAuth()`
   - User is redirected to Google for authentication

2. **Google authenticates the user**
   - User logs in with Google credentials
   - Google redirects back to Supabase callback URL

3. **Supabase processes the authentication**
   - Supabase creates/updates the auth user
   - Redirects to your app's `/auth/callback` route

4. **Your app handles the callback**
   - `/auth/callback/route.ts` exchanges the code for a session
   - Checks if user exists in Prisma database
   - Creates user record if it doesn't exist
   - Extracts name from `user_metadata.full_name` or `user_metadata.name`
   - Redirects to home page

5. **User is logged in**
   - Session is established
   - User can access all protected pages

## Files Created/Modified

### Created:
- `app/auth/callback/route.ts` - Handles OAuth callback
- `app/auth/google-auth-button.tsx` - Google sign-in button component
- `GOOGLE_OAUTH_SETUP.md` - This guide

### Modified:
- `app/auth/login/page.tsx` - Added Google OAuth button
- `app/auth/signup/page.tsx` - Added Google OAuth button

## Troubleshooting

### "redirect_uri_mismatch" Error
- Make sure the redirect URI in Google Cloud Console exactly matches your Supabase callback URL
- Check for trailing slashes or http vs https
- Verify you've added both development and production URLs

### "Access blocked: Authorization Error"
- Your OAuth consent screen might need verification
- Add yourself as a test user in Google Cloud Console
- For development, use test mode in OAuth consent screen

### User Not Created in Database
- Check your app logs for errors
- Verify Prisma connection is working (`npm run db:studio`)
- Check the callback route handler in `app/auth/callback/route.ts`

### Google Button Not Working
- Check browser console for errors
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Make sure Supabase Google provider is enabled

## Security Notes

- Keep your Google Client Secret private and secure
- Never commit secrets to version control
- Use environment variables for sensitive data
- Regularly review authorized redirect URIs
- Monitor OAuth usage in Google Cloud Console
- Consider adding additional OAuth scopes if you need more user data

## Production Checklist

Before deploying to production:

- [ ] Add production domain to Google OAuth authorized origins
- [ ] Add production callback URL to Google OAuth redirect URIs
- [ ] Verify OAuth consent screen information is correct
- [ ] Consider publishing OAuth consent screen (if needed for many users)
- [ ] Test OAuth flow in production environment
- [ ] Set up proper error tracking for OAuth failures
- [ ] Review and limit OAuth scopes to minimum needed
- [ ] Configure proper rate limits and security settings

## Additional OAuth Providers

The app is set up to easily add more OAuth providers:

- **GitHub**: Similar setup in Supabase → Providers
- **Apple**: Requires Apple Developer account
- **Microsoft**: Through Azure AD
- **Facebook**: Through Facebook Developers

To add more providers, follow the same pattern used for Google OAuth.

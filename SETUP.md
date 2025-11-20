# Setup Guide

This guide will help you set up Supabase authentication and Prisma database for your medication reminder app.

## Prerequisites

- A Supabase account (create one at [supabase.com](https://supabase.com))
- Node.js v20.10.0 or higher
- Your Supabase project should already be created

## Step 1: Configure Environment Variables

Your `.env` file already has the Supabase URL and anon key configured. You need to add the database connection strings.

### Get Database Connection Strings from Supabase:

1. Go to your Supabase project dashboard
2. Navigate to: **Project Settings** → **Database** → **Connection String**
3. You'll need TWO connection strings:

   **a) For `DATABASE_URL` (Connection Pooling - Transaction Mode):**
   - Select "Connection Pooling"
   - Mode: "Transaction"
   - Copy the connection string
   - It should look like: `postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true`

   **b) For `DIRECT_URL` (Direct Connection - Session Mode):**
   - Select "Direct Connection"
   - Mode: "Session"
   - Copy the connection string
   - It should look like: `postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres`

4. Update these values in your `.env` file:
   ```env
   DATABASE_URL="your-connection-pooling-url-here"
   DIRECT_URL="your-direct-connection-url-here"
   ```

   **IMPORTANT:** Replace `[YOUR-PASSWORD]` with your actual database password!

## Step 2: Initialize Prisma and Create Database Tables

Once your environment variables are configured, run these commands:

```bash
# Generate Prisma Client
npm run db:generate

# Push the schema to your database (creates all tables)
npm run db:push
```

The `db:push` command will create all the necessary tables in your Supabase database:
- User
- Medication
- MedicationSchedule
- MedicationLog
- DailyStreak
- NotificationSubscription
- UserPreferences

## Step 3: Verify Database Setup

You can verify your database setup using Prisma Studio:

```bash
npm run db:studio
```

This will open a browser window where you can view and manage your database tables.

## Step 4: Configure Supabase Authentication

Your Supabase authentication is already configured! The app includes:
- Login page: `/auth/login`
- Sign up page: `/auth/signup`
- Logout functionality on the profile page
- **All pages are protected and require authentication**
- **Google OAuth support** - See [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md) for setup instructions

### Authentication Methods:

1. **Email/Password Authentication** (works out of the box)
2. **Google OAuth** (requires setup - see [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md))

### Authentication Flow:

1. When users sign up via `/auth/signup`:
   - A user is created in Supabase Auth
   - A corresponding user record is created in your Prisma database
   - User is automatically logged in and redirected to home

2. When users log in via `/auth/login`:
   - Credentials are verified via Supabase Auth
   - Session is established
   - User is redirected to home

3. **All routes are protected:**
   - Unauthenticated users are automatically redirected to `/auth/login`
   - Authenticated users cannot access login/signup pages (redirected to home)
   - Navbar is hidden on authentication pages
   - Middleware handles all authentication checks

## Database Schema Overview

Your Prisma schema includes:

### User
- Stores user profile information
- Linked to Supabase Auth user ID

### Medication
- Stores medication details (name, dosage, frequency, type)
- Can be marked as active/inactive
- Supports start and end dates

### MedicationSchedule
- Defines when medications should be taken
- Supports specific times and days of week
- Multiple schedules per medication

### MedicationLog
- Tracks when medications were actually taken
- Supports status: pending, taken, missed, skipped
- Used for calculating statistics

### DailyStreak
- Tracks daily completion status
- Stores total doses, completed doses, and missed doses
- Used for streak calculation and progress tracking

### NotificationSubscription
- Stores push notification subscriptions
- Linked to users for sending reminders

### UserPreferences
- Stores user settings
- Notification preferences, timezone, language, etc.

## Next Steps

Now that authentication and database are set up, you can:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/auth/signup` to create an account

3. Explore the app:
   - Home page: View next reminder and streak widget
   - Calendar page: View medication schedule
   - Profile page: View stats, medications, and settings

## Useful Commands

```bash
# Start development server
npm run dev

# Generate Prisma Client (run after schema changes)
npm run db:generate

# Push schema changes to database
npm run db:push

# Create a migration (for production)
npm run db:migrate

# Open Prisma Studio to view/edit database
npm run db:studio
```

## Troubleshooting

### "Environment variable not found" error
- Make sure your `.env` file has all required variables
- Restart your development server after changing `.env`

### "Can't reach database server" error
- Verify your database connection strings are correct
- Check that your Supabase project is active
- Make sure you replaced `[YOUR-PASSWORD]` with your actual password

### Authentication not working
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check Supabase dashboard for any authentication errors
- Make sure email confirmations are disabled (or handle email verification)

## Security Notes

- Never commit your `.env` file to version control
- Use `.env.example` as a template for other developers
- Keep your database password secure
- Rotate your Supabase keys if they're ever exposed

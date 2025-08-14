# Firebase Setup Guide

Set up Firebase to track download counts for free while hosting on Vercel.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name (e.g., "my-portfolio")
4. Disable Google Analytics (not needed for simple counting)
5. Click "Create project"

## Step 2: Set Up Firestore Database

1. In your Firebase project, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (we'll secure it later)
4. Select a location close to your users
5. Click "Done"

## Step 3: Get Firebase Configuration

1. Click the gear icon → "Project settings"
2. Scroll down to "Your apps" section
3. Click the web icon `</>`
4. Enter app nickname (e.g., "portfolio-web")
5. Don't check "Firebase Hosting" 
6. Click "Register app"
7. Copy the config object

## Step 4: Add Environment Variables

In your Vercel deployment, add these environment variables:

```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Deploy on Vercel (as per VERCEL_SETUP.md)
3. Add the Firebase environment variables in Vercel dashboard
4. Redeploy

## What You Get

✅ **Real download tracking** - Counts persist across visits
✅ **Live updates** - Download numbers update immediately  
✅ **Free forever** - Firebase free tier includes 50k reads/writes per day
✅ **Global database** - Fast access worldwide
✅ **Vercel hosting** - Static site performance with dynamic counting

## Security (Optional)

For production, update Firestore rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /downloads/{document} {
      allow read: if true;
      allow write: if true; // Or add your security rules
    }
  }
}
```

## Result

Your portfolio will have:
- Beautiful static hosting on Vercel (free)
- Real download counting via Firebase (free)  
- Professional URLs and performance
- Zero payment methods required!
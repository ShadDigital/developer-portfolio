# Vercel Deployment Guide

Your portfolio is ready for free deployment on Vercel with Firebase download tracking!

## Quick Deploy Steps

### 1. Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Portfolio with Firebase tracking ready for deployment"

# Create GitHub repository and push
# Go to github.com → Create new repository → Copy the commands
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (free account)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings - just click "Deploy"

### 3. Add Firebase Environment Variables
In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add these variables (from your Replit Secrets):

```
VITE_FIREBASE_API_KEY = [your value]
VITE_FIREBASE_AUTH_DOMAIN = [your value]  
VITE_FIREBASE_PROJECT_ID = [your value]
VITE_FIREBASE_STORAGE_BUCKET = [your value]
VITE_FIREBASE_MESSAGING_SENDER_ID = [your value]
VITE_FIREBASE_APP_ID = [your value]
```

3. Click "Redeploy" to apply the environment variables

## What You Get

✅ **Professional URL**: `your-project.vercel.app`
✅ **Custom Domain**: Add your own domain for free
✅ **Global CDN**: Fast loading worldwide
✅ **Auto Deployments**: Updates when you push to GitHub
✅ **Real Download Tracking**: Persistent counts via Firebase
✅ **HTTPS**: Automatic SSL certificate

## Features Working
- Calculator app download with real tracking
- Professional bio section
- Mobile responsive design
- Contact section with GitHub link
- Firebase-powered download counting

## Cost
**$0** - Both Vercel and Firebase offer generous free tiers that will handle thousands of visitors per month.

Your portfolio will be live at a professional URL in under 10 minutes!
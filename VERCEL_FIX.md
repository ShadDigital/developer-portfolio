# Vercel Deployment Fix

If you're seeing a blank page or 404 error on Vercel, here's how to fix it:

## The Issue
Vercel isn't finding the built files because of the project structure.

## Quick Fix Steps

### 1. Update Build Command in Vercel Dashboard
1. Go to your Vercel project dashboard
2. Go to Settings → General → Build & Output Settings
3. Update these settings:

**Build Command:** `vite build`
**Output Directory:** `dist/public`
**Install Command:** `npm install`

### 2. Redeploy
1. Click "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"

## Alternative: Manual Build Test
You can test the build locally first:

```bash
# In your project root
npm run build

# Check if dist/public folder was created with index.html
ls -la dist/public/
```

## Expected Result
After the fix, your Vercel deployment should:
- Build successfully 
- Show your portfolio at the Vercel URL
- Have working Firebase download tracking
- Display your Calculator app properly

## If Still Not Working
Double-check your Firebase environment variables in Vercel:
1. Vercel Dashboard → Settings → Environment Variables
2. Make sure all 6 Firebase variables are set correctly
3. Redeploy after adding variables

Your portfolio should work perfectly after these fixes!
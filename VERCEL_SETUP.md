# Vercel Deployment Guide

Deploy your portfolio for FREE on Vercel with these simple steps:

## Step 1: Prepare Your Code for Vercel

Since Vercel specializes in frontend deployments, we need to create a static build of your portfolio.

### Create Build Script
Add to your `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Step 2: Create Vercel Configuration

Create `vercel.json` in your project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/downloads/(.*)",
      "destination": "/downloads/$1"
    },
    {
      "source": "/assets/(.*)",
      "destination": "/assets/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Step 3: Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)
1. Push your code to GitHub (same as GitHub Pages guide)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project"
4. Connect your GitHub repository
5. Vercel automatically detects it's a Vite project
6. Click "Deploy"

### Option B: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Step 4: Access Your Website

- Your site will be available at: `https://your-project.vercel.app`
- Vercel provides automatic HTTPS
- Custom domains available on free plan

## Benefits of Vercel

✅ **Completely Free** - No payment method required
✅ **Fast Global CDN** - Your site loads quickly worldwide  
✅ **Automatic Deployments** - Updates when you push to GitHub
✅ **Custom Domains** - Use your own domain for free
✅ **HTTPS Included** - Secure by default
✅ **Preview Deployments** - Test changes before going live

## Important Notes

- Vercel is optimized for static sites and serverless functions
- Your download tracking will work differently (no persistent backend)
- File downloads will work perfectly
- Consider this a portfolio showcase

## Your Portfolio Features That Will Work

✅ Beautiful portfolio display
✅ Application screenshots
✅ File downloads
✅ Responsive design
✅ Contact section with GitHub link

Ready to deploy? The process takes less than 5 minutes!
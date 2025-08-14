# GitHub Pages Setup Guide

Follow these steps to deploy your portfolio for FREE on GitHub Pages:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `my-portfolio` or `developer-portfolio`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Upload Your Code

### Option A: Using Git (Recommended)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Option B: Upload Files Manually
1. Download all your project files
2. Use GitHub's web interface to upload them

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

## Step 4: Access Your Website

- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- It may take a few minutes to become available

## Important Notes for GitHub Pages

- GitHub Pages only serves static files
- Your download tracking won't work exactly the same (no backend)
- But your portfolio display and file downloads will work perfectly
- Consider this a portfolio showcase rather than a dynamic app

## Alternative: Convert to Pure Static

If you want the download counter to work, consider these free static site generators:
- **Gatsby** with Netlify CMS
- **Next.js** static export with Vercel
- **Nuxt.js** static generation

These maintain your functionality while being completely free to host.
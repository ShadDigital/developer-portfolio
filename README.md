# Developer Portfolio

A clean, minimalist portfolio website showcasing applications with download functionality.

## Features

- Professional bio section
- Application showcase with screenshots
- Live download tracking
- Responsive design
- No rating system (clean, minimal approach)

## Built With

- React + TypeScript
- Tailwind CSS
- shadcn/ui components
- Express.js backend
- Static file serving

## Deployment Options

### GitHub Pages (Free)
1. Push this code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/repository-name`

### Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Automatic deployments on code changes
3. Custom domain support

### Vercel (Free)
1. Import project from GitHub
2. Automatic deployments
3. Excellent performance

## Local Development

```bash
npm install
npm run dev
```

## File Structure

```
public/
├── assets/           # Application images and screenshots
└── downloads/        # Application files for download
```

Add your application files to these folders and update the data in `server/storage.ts`.
# Assets Folder

Place your application images, icons, and other assets here.

## File Structure
```
public/assets/
├── app-screenshots/
│   ├── my-app-1.png
│   ├── my-app-2.jpg
│   └── my-app-3.webp
├── icons/
│   ├── app-icon-1.png
│   └── app-icon-2.svg
└── logos/
    └── company-logo.png
```

## Usage
1. Upload your images to this folder
2. Reference them in `server/storage.ts` like: 
   ```typescript
   imageUrl: "/assets/app-screenshots/my-app.png"
   ```

## Supported Formats
- .png, .jpg, .jpeg, .webp, .gif, .svg
- Recommended size: 400x240px for app screenshots
- Icons: 64x64px or 128x128px
# Downloads Folder

Place your application files here to make them downloadable from your portfolio.

## File Structure
```
public/downloads/
├── your-app.exe        # Windows executable
├── your-app.dmg        # macOS installer
├── your-app.deb        # Linux package
├── your-app.apk        # Android app
└── your-app.zip        # Cross-platform archive
```

## Usage
1. Upload your app files to this folder
2. Update `server/storage.ts` with the correct filenames
3. Use paths like: `downloadUrl: "/downloads/your-app.exe"`

## File Types Supported
- .exe (Windows)
- .dmg (macOS)
- .deb/.rpm (Linux)
- .apk (Android)
- .ipa (iOS)
- .zip/.tar.gz (Archives)
- Any other file type
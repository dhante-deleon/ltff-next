# LTFF Next.js Site

Local development:

```powershell
cd ltff-next
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```powershell
npm run build
npm start
```

Notes:
- Replace the placeholder SVGs in `public/` with real images.
- Edit copy in `pages/*` and `components/*` to match organization branding.

Image optimization script

Generate responsive optimized images (JPEG + WebP) from the originals in `public/images`:

```powershell
cd ltff-next
npm install
npm run resize-images
```

This will create `public/images/optimized` with resized images you can reference in the site.

Docker (run without installing Node locally)

Build the production image and run a container:

```powershell
cd ltff-next
docker build -t ltff-next:latest .
docker run -p 3000:3000 --rm ltff-next:latest
```

This serves the production build on http://localhost:3000

If you want to develop with Docker and bind-mount the source, consider running the dev server in a container using a developer image or `docker-compose`.

# Smart Revue

A polished, responsive React + TypeScript marketing landing page for Smart Revue.

## Development

```bash
npm install
```

Create the backend environment file:

```bash
cp .env.example .env
```

Open `.env` and set `MONGODB_URI` with the rotated MongoDB password. Keep this
file private; it is ignored by Git.

Start the API in one terminal:

```bash
npm run server
```

Start the frontend in another terminal:

```bash
npm run dev
```

The contact form sends enquiries to `POST /api/contact`, which stores them in
the `webapplication.FormData` MongoDB collection. Check the API before testing
the form:

```bash
curl http://localhost:3001/api/health
```

Expected response:

```json
{ "ok": true }
```

Build and lint with `npm run build` and `npm run lint`.

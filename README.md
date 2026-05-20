# User Management App (MERN Week 8)

A simple **User Management** project built as part of my MERN assignments. It includes a React frontend (Vite) and an optional Express backend.

## What this repo contains

- **Frontend**: Add a user, list users, and view user details (React Router pages).
- **Two data modes**
    - **LocalStorage mode (default)**: Works without any backend/database.
    - **API mode (optional)**: If you set `VITE_API_URL`, the app will use a backend API.

## Tech stack

- React + Vite
- React Router
- Tailwind CSS
- react-hook-form
- (Optional) Node.js + Express

## Project structure

```
frontend/   # React app (Vite)
backend/    # Express API (optional)
```

## Run locally

### 1) Frontend

```bash
cd frontend
npm install
npm run dev
```

### 2) Backend (optional)

> The backend is **not required** if you want LocalStorage mode.

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000` by default.

## LocalStorage mode (no backend)

If `VITE_API_URL` is **not** set, the app stores users in the browser under:

- `localStorage` key: `user-management.users`

To inspect it:

1. Open DevTools → **Application** → **Local Storage**
2. Select your site origin (domain)
3. Find `user-management.users`

## API mode (connect frontend to backend)

Create a file `frontend/.env`:

```bash
VITE_API_URL=http://localhost:5000
```

Restart the frontend dev server after changing `.env`.

### API endpoints

- `GET /user-api/users` → returns `{ payload: [...] }`
- `POST /user-api/users` → creates a user (in-memory)

> Note: the backend currently uses an **in-memory** array, so data resets when the server restarts.

## Deployment notes

### Vercel (frontend)

- Set the **Root Directory** to `frontend`.
- SPA refresh (e.g. `/adduser`, `/userslist`) is handled by `frontend/vercel.json`.
- If you want **LocalStorage mode** in production, make sure `VITE_API_URL` is **not** set in Vercel Environment Variables.

### Render (backend)

You can deploy the backend as a web service. The server listens on `process.env.PORT`.

## Notes (concept)

**State management** means sharing and syncing state across the application (for example between different components/pages).

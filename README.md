# User Management Website

A small user management website built with **React** that lets you add users, view a user list, and open a user details page.

## Website features

- **Add User** form with validation
- **Users List** page with loading / empty / error states
- **User Details** page (opens when you click a user)
- **Responsive UI** (cards + grid)
- Works in **two modes**:
    - **LocalStorage mode (no backend)**: data is saved in the browser
    - **API mode (optional backend)**: data is fetched/saved through an Express API

## Frontend concepts used

- **React component architecture**
    - Page components like Users List, Add User, and User Details
    - Local UI state using `useState`

- **React Router (SPA routing)**
    - Nested routes with a shared layout (header/footer)
    - Navigation using `NavLink`
    - Programmatic navigation using `useNavigate`
    - Passing selected user data to the details page using `useLocation().state`

- **Form handling with react-hook-form**
    - `register()` fields
    - `handleSubmit()` for form submission
    - Showing validation errors in the UI

- **Conditional rendering for a better UX**
    - Shows loading while data is being loaded
    - Shows a friendly message when there are no users
    - Shows an error message if something fails

- **Local persistence with localStorage (when no backend is used)**
    - Stores users under: `user-management.users`
    - Uses JSON `stringify/parse` to save/load arrays
    - Generates a simple client-side id for each stored user

- **Environment variables (Vite)**
    - Uses `import.meta.env.VITE_API_URL`
    - If `VITE_API_URL` exists → uses API mode
    - If it does not exist → uses LocalStorage mode

- **Styling with Tailwind CSS**
    - Utility-first styling and responsive layout
    - Reusable UI classes (buttons, cards, fields)

## Backend concepts used (optional)

> The backend is optional. The website can work fully without it.

- **Express server** with a separate router module
- **Middleware**
    - `cors()` to allow cross-origin requests
    - `express.json()` to read JSON request bodies
- **REST API design**
    - `GET /user-api/users` → returns `{ message, payload }`
    - `POST /user-api/users` → creates a user and returns `{ message, payload }`
- **Status codes**
    - `200` for successful fetch
    - `201` for successful create
    - `500` for server errors
- **In-memory storage** for demo purposes (data resets on server restart)
- **PORT configuration** using `process.env.PORT || 5000`

## How the website stores data

- **LocalStorage mode** (default):
    - Add User → saves into localStorage → navigates to Users List
    - Users List → reads from localStorage

- **API mode** (when `VITE_API_URL` is set):
    - Add User → `POST {VITE_API_URL}/user-api/users`
    - Users List → `GET {VITE_API_URL}/user-api/users`

## Run the website locally (quick)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend (only if you want API mode)

```bash
cd backend
npm install
npm run dev
```

To enable API mode locally, set this in `frontend/.env`:

```bash
VITE_API_URL=http://localhost:5000
```

## Deployment note (SPA refresh)

For deployments like Vercel, refreshing routes like `/adduser` or `/userslist` needs an SPA rewrite. This project includes it in `frontend/vercel.json`.

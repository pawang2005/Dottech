# DotTech Academy

Modern MERN stack website for a computer education institute focused on Generative AI and future course expansion.

## Project Structure

- `frontend/` React + Vite + Tailwind UI
- `backend/` Express + MongoDB API

## Local Development

1. Install frontend dependencies.

```bash
cd frontend
npm install
```

2. Install backend dependencies.

```bash
cd ../backend
npm install
```

3. Create `backend/.env` with your MongoDB Atlas connection string.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

4. Start the backend.

```bash
cd backend
npm start
```

5. Start the frontend.

```bash
cd ../frontend
npm run dev
```

## API Endpoints

- `GET /api/courses`
- `GET /api/courses/:id`
- `POST /api/courses`
- `PUT /api/courses/:id`
- `DELETE /api/courses/:id`
- `POST /api/contacts`

## Deployment

### Frontend on Vercel

- Set the Vercel project root to `frontend`.
- Add `VITE_API_BASE_URL` in Vercel environment variables with your Render backend URL.
- Build command: `npm run build`
- Output directory: `dist`

### Backend on Render

- Set the root directory to `backend`.
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables: `PORT`, `MONGODB_URI`, `CLIENT_URL`

### MongoDB Atlas

- Create a cluster.
- Add a database user.
- Allow network access from your Render IPs or use `0.0.0.0/0` during development.
- Copy the connection string into `MONGODB_URI`.

## Notes

- The brochure download is served from the backend at `/brochure.pdf`.
- Course images are served from the backend at `/assets/genai-banner.svg`.
- The first course is automatically seeded on server start.

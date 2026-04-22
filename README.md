# Ansh Personal Portfolio (Deploy Ready)

Modern full stack portfolio website with:
- **Frontend:** React + Vite
- **Backend:** **Java 17 + Spring Boot**
- **Deployment:** GitHub Pages or Vercel for frontend, Render for backend

## Project structure
- `frontend/` → React UI
- `backend/` → Spring Boot REST API
- `.github/workflows/deploy-pages.yml` → GitHub Pages deployment workflow
- `backend/render.yaml` → Render deployment blueprint
- `frontend/vercel.json` → Vercel frontend config

## Local run
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```
If Maven wrapper is not added in your environment, use:
```bash
mvn spring-boot:run
```

## Environment variables
Frontend (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_RESUME_URL=#contact
```

Backend:
- `PORT` is supported automatically for Render.

See `DEPLOYMENT_GUIDE.md` for step-by-step hosting instructions.

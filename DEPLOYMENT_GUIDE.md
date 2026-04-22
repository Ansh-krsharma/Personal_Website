# Deployment Guide

This project uses a **Java Spring Boot backend** and a **React/Vite frontend**.

## Option 1: Frontend on GitHub Pages + Backend on Render

### Step 1: Push the whole project to GitHub
Upload the entire folder structure as one repository.

### Step 2: Deploy the Java backend on Render
1. Open Render.
2. Create a new **Blueprint** or **Web Service**.
3. Connect your GitHub repository.
4. Use the included file: `backend/render.yaml`.
5. Render will build the Spring Boot backend from the `backend/` folder.
6. After deployment, your API URL will look like:
   `https://your-service-name.onrender.com/api`

### Step 3: Add the API URL to GitHub Actions
In your GitHub repository:
1. Open **Settings** → **Secrets and variables** → **Actions**.
2. Create a secret named:
   `VITE_API_BASE_URL`
3. Set its value to your Render API URL, for example:
   `https://your-service-name.onrender.com/api`

Optional:
- Add another secret named `VITE_RESUME_URL` if you want the Resume button to open a hosted PDF.

### Step 4: Enable GitHub Pages
1. Go to **Settings** → **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to the `main` branch.
4. GitHub will run `.github/workflows/deploy-pages.yml` and publish the frontend.

Your frontend URL will be:
`https://your-username.github.io/your-repository-name/`

---

## Option 2: Frontend on Vercel + Backend on Render

### Backend
Deploy the backend exactly the same way as above on Render.

### Frontend on Vercel
1. Import the **frontend** folder into Vercel.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables:
   - `VITE_API_BASE_URL=https://your-service-name.onrender.com/api`
   - `VITE_RESUME_URL=https://your-public-resume-link` (optional)
6. Deploy.

---

## Local Development

### Start backend
```bash
cd backend
mvn spring-boot:run
```

### Start frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend local URL:
`http://localhost:5173`

Backend local URL:
`http://localhost:8080/api/portfolio`

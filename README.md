# 🚀 Ansh Kumar Sharma – Personal Portfolio Website

A modern **Full Stack Developer Portfolio** built using **React + Vite (Frontend)** and **Java Spring Boot (Backend)**, designed with a sleek dark UI and deployed using **GitHub Pages (Frontend)** and **Render (Backend)**.

---

## 🌐 Live Demo

🔗 Frontend: https://ansh-krsharma.github.io/Personal_Website/
🔗 Backend API: https://ansh-portfolio-api.onrender.com/api

---

## ✨ Features

* ⚡ Modern dark-themed UI inspired by top developer portfolios
* 🎯 Fully responsive (mobile + desktop)
* 📊 Dynamic portfolio data from backend API
* 📬 Contact form integrated with backend
* 🚀 Fast performance using Vite
* ☁️ Deploy-ready configuration (GitHub Pages, Render)

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* CSS / Tailwind (if used)
* JavaScript (ES6+)

### Backend

* Java 17
* Spring Boot
* REST API

### Deployment

* GitHub Pages (Frontend)
* Vercel (Optional Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
Personal_Website/
│
├── frontend/                 # React UI
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── package.json
│
├── backend/                 # Spring Boot API
│   ├── src/main/java/
│   ├── pom.xml
│   └── render.yaml
│
├── .github/workflows/       # GitHub Actions
│   └── deploy-pages.yml
│
└── README.md
```

---

## ⚙️ Setup & Run Locally

### 🔹 Clone Repository

```bash
git clone https://github.com/ansh-krsharma/Personal_Website.git
cd Personal_Website
```

---

### 🔹 Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

### 🔹 Run Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080/api
```

---

## 🔐 Environment Variables

### Frontend (.env)

```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_RESUME_URL=#contact
```

### Production

**GitHub Secrets / Vercel Env:**

```
VITE_API_BASE_URL=https://ansh-portfolio-api.onrender.com/api
VITE_RESUME_URL=#contact
```

---

## 🚀 Deployment Guide

### 🔹 Frontend (GitHub Pages)

1. Push code to `main` branch
2. Go to **Settings → Pages**
3. Set:

```
Source → GitHub Actions
```

4. GitHub Actions will auto-deploy


### 🔹 Backend (Render)

1. Create new **Web Service**
2. Connect GitHub repo
3. Set:

```
Root Directory → backend
Runtime → Docker
```

4. Add env variable:

```
JAVA_TOOL_OPTIONS=-Dserver.port=$PORT
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/portfolio` | Fetch portfolio data |
| POST   | `/api/contact`   | Send contact message |



## 👨‍💻 Author

**Ansh Kumar Sharma**
📍 Bhubaneswar, India
🔗 https://linkedin.com/in/anshkumarsharma-letsconnectasap
💻 https://github.com/Ansh-krsharma

---

## ⭐ Support

If you like this project:

⭐ Star this repo
🍴 Fork it
📢 Share it

---

## 📜 License

This project is open-source.

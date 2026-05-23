# devKit — Design System for Student Developers

> A beginner-friendly MERN stack web application featuring 60+ copy-paste UI components, an AI-powered theme generator, and a component playground. Built for student developers and small teams.

![devKit Banner](https://via.placeholder.com/1200x400/6C63FF/ffffff?text=devKit+%E2%80%94+Design+System+for+Students)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## Overview

**devKit** solves the problem that student developers waste significant time re-creating the same UI components for every project. It provides:

- ✅ 60+ ready-to-use components (HTML + React)
- ✅ One-click copy — no install, no config
- ✅ AI-powered theme generator
- ✅ User authentication (save your favorites)
- ✅ Dark mode first design

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, React Router v6, Axios    |
| Styling    | CSS Modules + CSS Variables         |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB + Mongoose                  |
| Auth       | JWT (JSON Web Tokens) + bcrypt      |
| AI         | Anthropic Claude API (theme gen)    |
| Deployment | Vercel (client) + Render (server)   |

---

## Features

### 🧩 Component Library
- Buttons, Cards, Badges, Alerts, Inputs, Toggles, Modals, Navbars, Progress bars, Avatars, Tables, Dropdowns
- Each component shows live preview + copy HTML + copy React code

### 🎨 AI Theme Generator
- Answer 3 questions about your project
- Claude AI generates a full color palette + font pairing
- Export as CSS variables or Tailwind config

### 👤 User Authentication
- Register / Login with JWT
- Save favourite components
- Personal theme history

### 🔍 Search & Filter
- Search by component name
- Filter by category (Layout, Forms, Navigation, Feedback)
- Filter by framework (HTML / React)

---

## Folder Structure

```
devkit/
├── server/                        # Express.js backend
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js      # Register, Login, Me
│   │   ├── componentController.js # CRUD for components
│   │   ├── themeController.js     # AI theme generation
│   │   └── favoriteController.js  # Save/remove favorites
│   ├── middleware/
│   │   ├── authMiddleware.js      # JWT verification
│   │   └── errorMiddleware.js     # Global error handler
│   ├── models/
│   │   ├── User.js                # User schema
│   │   ├── Component.js           # Component schema
│   │   └── Theme.js               # Theme schema
│   ├── routes/
│   │   ├── authRoutes.js          # /api/auth/*
│   │   ├── componentRoutes.js     # /api/components/*
│   │   ├── themeRoutes.js         # /api/theme/*
│   │   └── favoriteRoutes.js      # /api/favorites/*
│   ├── utils/
│   │   └── generateToken.js       # JWT token utility
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                  # Entry point
│
├── client/                        # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                # Images, icons, fonts
│   │   ├── components/
│   │   │   ├── ui/                # Reusable UI components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Alert.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Toggle.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   └── Avatar.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── sections/
│   │   │       ├── HeroSection.jsx
│   │   │       ├── ComponentGrid.jsx
│   │   │       ├── SearchBar.jsx
│   │   │       ├── ComponentCard.jsx
│   │   │       └── ThemeGenerator.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx    # Auth state
│   │   │   └── ThemeContext.jsx   # Theme state
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useComponents.js
│   │   │   └── useClipboard.js
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ComponentsPage.jsx
│   │   │   ├── ComponentDetailPage.jsx
│   │   │   ├── ThemePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── services/
│   │   │   ├── api.js             # Axios instance
│   │   │   ├── authService.js
│   │   │   ├── componentService.js
│   │   │   └── themeService.js
│   │   ├── styles/
│   │   │   ├── globals.css        # CSS variables + reset
│   │   │   └── components.css     # Shared component styles
│   │   ├── utils/
│   │   │   └── formatCode.js      # Code formatting helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-username/devkit.git
cd devkit
```

### 2. Install server dependencies
```bash
cd server
npm install
```

### 3. Install client dependencies
```bash
cd ../client
npm install
```

### 4. Set up environment variables
```bash
# In /server/.env
cp .env.example .env
# Fill in your values (see Environment Variables section)
```

### 5. Run the app (development)
```bash
# Terminal 1 — Start backend
cd server && npm run dev

# Terminal 2 — Start frontend
cd client && npm run dev
```

### 6. Open in browser
```
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

---

## Environment Variables

### Server (`server/.env`)
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/devkit
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
ANTHROPIC_API_KEY=sk-ant-your-key-here
NODE_ENV=development
```

### Client (`client/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Auth
| Method | Endpoint              | Description        | Auth |
|--------|-----------------------|--------------------|------|
| POST   | /api/auth/register    | Register user      | No   |
| POST   | /api/auth/login       | Login user         | No   |
| GET    | /api/auth/me          | Get current user   | Yes  |

### Components
| Method | Endpoint                    | Description             | Auth |
|--------|-----------------------------|-------------------------|------|
| GET    | /api/components             | Get all components      | No   |
| GET    | /api/components/:id         | Get single component    | No   |
| GET    | /api/components?category=   | Filter by category      | No   |
| GET    | /api/components?search=     | Search components       | No   |

### Theme Generator
| Method | Endpoint          | Description            | Auth |
|--------|-------------------|------------------------|------|
| POST   | /api/theme/generate | Generate AI theme    | No   |
| GET    | /api/theme/history  | User's saved themes  | Yes  |

### Favorites
| Method | Endpoint              | Description            | Auth |
|--------|-----------------------|------------------------|------|
| GET    | /api/favorites        | Get user favorites     | Yes  |
| POST   | /api/favorites/:id    | Add to favorites       | Yes  |
| DELETE | /api/favorites/:id    | Remove from favorites  | Yes  |

---

## Scripts

### Server
```bash
npm run dev      # Start with nodemon (hot reload)
npm start        # Production start
npm run seed     # Seed database with sample components
```

### Client
```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

---

## Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/add-new-component`
3. Commit changes: `git commit -m 'Add: Accordion component'`
4. Push: `git push origin feature/add-new-component`
5. Open a Pull Request

---

## License

MIT © devKit Team — DTI 2026

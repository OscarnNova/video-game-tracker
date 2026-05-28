# Fase 1 — Setup Limpio: Node.js + Git + GitHub
# Proyecto: Video Game Tracker API

## Contexto
Proyecto nuevo desde cero. API REST para rastrear videojuegos.
Stack: Node.js, Express, Mongoose. DB local para desarrollo, Atlas para producción en Render.
Repo GitHub: https://github.com/OscarnNova/video-game-tracker.git

---

## Paso 1 — Limpiar proyecto actual
Elimina todos los archivos y carpetas del proyecto EXCEPTO la carpeta `prompts/`.
Conserva únicamente: `prompts/`

---

## Paso 2 — Inicializar proyecto Node.js
```bash
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

---

## Paso 3 — Crear estructura de carpetas
```
src/
  config/
    db.js
  models/
  routes/
    health.js
  app.js
server.js
.env
.env.example
.gitignore
```

---

## Paso 4 — Crear archivos

**server.js**
```js
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
```

**src/app.js**
```js
const express = require('express');
const cors = require('cors');
const healthRouter = require('./routes/health');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);

module.exports = app;
```

**src/config/db.js**
```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**src/routes/health.js**
```js
const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ status: 'ok', db: dbStatus });
});

module.exports = router;
```

**.env**
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/videogames
```

**.env.example**
```
PORT=3000
MONGO_URI=
```

**.gitignore**
```
node_modules/
.env
```

**Scripts en package.json** — agrega dentro de "scripts":
```json
"start": "node server.js",
"dev": "nodemon server.js"
```

---

## Paso 5 — Inicializar Git y push a GitHub
```bash
git init
git add .
git commit -m "feat: initial setup - Node.js + Express + MongoDB"
git branch -M main
git remote add origin https://github.com/OscarnNova/video-game-tracker.git
git push -u origin main
```

---

## Paso 6 — Verificación
Ejecuta `npm run dev` y confirma en consola:
- `MongoDB connected`
- `Server running on port 3000`

No crear archivos de test ni suites de jest.
No modificar archivos fuera de la estructura indicada.

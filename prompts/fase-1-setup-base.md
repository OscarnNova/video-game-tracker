# Fase 1 — Setup Base Node.js + MongoDB
# Proyecto: Video Game Tracker API

## Contexto
Proyecto de prueba. API REST para rastrear videojuegos. Stack: Node.js, Express, Mongoose, MongoDB Atlas.

---

## Paso 0 — Pull (si el proyecto ya tiene git inicializado)
Si existe un repositorio git, ejecuta:
```bash
git pull
```
Si no existe repositorio, omite este paso.

---

## Instrucciones

### 1. Inicializar proyecto
```bash
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

### 2. Estructura de carpetas a crear
```
src/
  config/
    db.js
  routes/
    health.js
  app.js
server.js
.env
.env.example
.gitignore
```

### 3. Contenido de cada archivo

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
MONGO_URI=your_mongo_uri_here
```
> Reemplaza `your_mongo_uri_here` con la URI real de MongoDB Atlas.

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

### 4. Scripts en package.json
Agrega dentro de `"scripts"`:
```json
"start": "node server.js",
"dev": "nodemon server.js"
```

---

## Verificación antes de terminar
1. Ejecuta `npm run dev`
2. Confirma en consola: `Server running on port 3000` y `MongoDB connected`
3. No crear archivos de test, suites de jest, ni carpetas __tests__/

---

## Restricciones
- No conectarse a bases de datos de staging ni producción
- No crear scripts de test dedicados
- No modificar archivos fuera de la estructura indicada

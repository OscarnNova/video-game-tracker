# Fase 2 — Endpoints Video Game Tracker
# Proyecto: Video Game Tracker API

## Contexto
Continuación de Fase 1. El servidor Node.js + Express ya corre en puerto 3000 con MongoDB local conectado.
Ahora agregamos el modelo Game y los endpoints REST.

---

## Paso 0 — Verificación previa
Confirma que el servidor esté corriendo antes de hacer cambios. Si no está corriendo, no inicies el servidor — solo crea los archivos.

---

## Instrucciones

### 1. Crear modelo Game
Crea el archivo `src/models/Game.js`:

```js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['playing', 'completed', 'wishlist'],
    default: 'wishlist'
  }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);
```

### 2. Crear rutas de games
Crea el archivo `src/routes/games.js`:

```js
const router = require('express').Router();
const Game = require('../models/Game');

// POST /games — agregar juego
router.post('/', async (req, res) => {
  try {
    const game = new Game(req.body);
    const saved = await game.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /games — listar todos
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /games/:id — obtener por ID
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ error: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
```

### 3. Registrar rutas en app.js
Edita `src/app.js` y agrega la ruta de games. El archivo debe quedar así:

```js
const express = require('express');
const cors = require('cors');
const healthRouter = require('./routes/health');
const gamesRouter = require('./routes/games');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);
app.use('/games', gamesRouter);

module.exports = app;
```

---

## Verificación antes de terminar
1. Ejecuta `npm run lint` si existe, si no omite este paso
2. Verifica con `git status` que solo se tocaron los archivos indicados
3. No crear archivos de test, suites de jest ni carpetas __tests__/

---

## Restricciones
- No modificar server.js ni db.js
- No crear archivos fuera de la estructura indicada
- No instalar dependencias adicionales

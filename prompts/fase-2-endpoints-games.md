# Fase 2 — Modelo Game + Endpoints REST
# Proyecto: Video Game Tracker API

## Contexto
El servidor Node.js + Express ya corre en puerto 3000 con MongoDB local conectado.
Repo GitHub: https://github.com/OscarnNova/video-game-tracker.git
Ahora agregamos el modelo Game y los tres endpoints REST.

---

## Paso 1 — Crear modelo Game
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

---

## Paso 2 — Crear rutas de games
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

---

## Paso 3 — Actualizar app.js
Edita `src/app.js` para registrar las rutas de games:

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

## Paso 4 — Commit y push a GitHub
```bash
git add .
git commit -m "feat: add Game model and REST endpoints"
git push origin main
```

---

## Restricciones
- No modificar server.js ni db.js
- No crear archivos de test ni suites de jest
- No instalar dependencias adicionales

# FASE 3 — Frontend Social UI + Deploy

## Contexto
El backend ya está desplegado en Render. Se realizaron cambios locales que necesitan ser commiteados y pusheados a main para que Render haga el auto-deploy.

## Paso 1 — Pull
```bash
git pull origin main
```

## Paso 2 — Verificar estado actual
```bash
git status
```

## Paso 3 — Stagear todos los cambios
```bash
git add -A
```

## Paso 4 — Verificar qué se va a commitear
```bash
git diff --cached --stat
```

Los archivos deben incluir:
- `src/models/Game.js` — campos `rating` (Number, 1-10) y `coverUrl` (String)
- `src/routes/games.js` — endpoint `DELETE /games/:id`
- `src/app.js` — `express.static` apuntando a `public/`
- `public/index.html` — frontend completo (React-like UI social)
- `docs/GOLD_RULES_AGENT.md` — reglas del agente

Si algún archivo de `src/` no aparece con cambios, aplica manualmente los siguientes diffs:

### src/models/Game.js — agregar después del campo `status`:
```js
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: null
  },
  coverUrl: {
    type: String,
    default: null
  }
```

### src/routes/games.js — agregar antes de `module.exports`:
```js
// DELETE /games/:id — eliminar juego
router.delete('/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ error: 'Game not found' });
    res.json({ message: 'Game deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

### src/app.js — agregar después de `const cors = require('cors');`:
```js
const path = require('path');
```
Y agregar después de `app.use(express.json());`:
```js
app.use(express.static(path.join(__dirname, '../public')));
```

## Paso 5 — Commit y push
```bash
git add -A
git commit -m "feat: frontend social UI, rating field, delete endpoint, static files"
git push origin main
```

## Paso 6 — Verificación local antes del commit
Levanta el server y verifica:
```bash
npm run dev
```
Confirma que muestra `MongoDB connected` y `Server running`.

## Checklist manual (para el usuario)
- [ ] Abrir `http://localhost:3000` → debe mostrar la UI del frontend
- [ ] Abrir `https://video-game-tracker-jvfa.onrender.com` → mismo resultado tras el deploy (~2 min)

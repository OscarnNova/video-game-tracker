# FASE 19 — Limpieza GameTracker

## Objetivo
Eliminar todo el código relacionado con GameTracker y dejar el repo limpio como base para la implementación de Adray Inteligencia Creativa.

## Instrucciones

### 1. Git pull
```bash
git pull origin main
```

### 2. Eliminar archivos del GameTracker
```bash
rm src/models/Game.js
rm src/routes/games.js
rm -rf public/
rm prompts/fase-1-setup-base.md
rm prompts/fase-1-setup-limpio.md
rm prompts/fase-10-top-generos.md
rm prompts/fase-11-paginacion.md
rm prompts/fase-12-edit-delete.md
rm prompts/fase-12-hotfix-cache.md
rm prompts/fase-13-lock-completed.md
rm prompts/fase-14-protect-completed.md
rm prompts/fase-15-bigger-bomb-icons.md
rm prompts/fase-16-icon-repulsion.md
rm prompts/fase-17-hotfix-duplicate-zindex.md
rm prompts/fase-17-modales-y-fix-edit.md
rm prompts/fase-18-bomb-center-explode.md
rm prompts/fase-18-hotfix-bomb-lifetime.md
rm prompts/fase-2-endpoints-games.md
rm prompts/fase-3-frontend-deploy.md
rm prompts/fase-4-dragon-background.md
rm prompts/fase-4b-dragon-animated.md
rm prompts/fase-4c-dragon-fix.md
rm prompts/fase-4d-dragon-green-fire.md
rm prompts/fase-4e-dragon-final.md
rm prompts/fase-5-dragon-green.md
rm prompts/fase-6-background-gaming.md
rm prompts/fase-7-cursor-glove.md
rm prompts/fase-7-hotfix-cursor.md
rm prompts/fase-7-hotfix2-cursor.md
rm prompts/fase-7-hotfix3-cursor-final.md
rm prompts/fase-7-hotfix4-cursor-size.md
rm prompts/fase-8-favicon.md
rm prompts/fase-8-hotfix-favicon.md
rm prompts/fase-9-social-links.md
```

### 3. Limpiar src/app.js
Reemplazar el contenido completo de `src/app.js` con lo siguiente:

```javascript
const express = require('express');
const cors = require('cors');
const healthRouter = require('./routes/health');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);

module.exports = app;
```

### 4. Verificar que el servidor levanta sin errores
```bash
npm run dev
```

Confirmar que `/health` responde correctamente:
```bash
curl http://localhost:3000/health
```

### 5. Commit y push
```bash
git add -A
git commit -m "chore: remove GameTracker — base limpia para Adray Inteligencia Creativa"
git push origin main
```

## Resultado esperado
- Sin archivos de GameTracker en el repo
- Carpeta `prompts/` vacía (solo este archivo)
- `src/app.js` limpio sin referencias a games
- Servidor Express corriendo en puerto 3000 con solo `/health` activo
- MongoDB conectado sin errores

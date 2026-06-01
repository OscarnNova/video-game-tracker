# Video Game Tracker — Commit Tracking

## FASE 18 — Bombas viajan al interior + explotan por cercanía al centro

| Campo | Valor |
|-------|-------|
| SHA corto | 1677f44 |
| Mensaje | feat: bombs travel deeper into screen, explode by center proximity |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-18-bomb-center-explode.md |

**Archivos tocados:** public/index.html — EDIT (vida bomba 320+380 frames, centerProb * 0.007 por frame)
**Verificación:** 3/3 true ✅
**Estado:** ✅ Validado

### FASE 18 HOTFIX — Aumentar tiempo de flote de bombas

| Campo | Valor |
|-------|-------|
| SHA corto | ad4fb71 |
| Mensaje | fix: increase bomb float time to 8-16s and lower center explosion probability |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-18-hotfix-bomb-lifetime.md |

**Archivos tocados:** public/index.html — EDIT (vida 500+500, centerProb 0.007→0.004)
**Verificación:** 2/2 true ✅
**Estado:** ✅ Validado

---

## FASE 17 — Modales confirmación + Fix edición Wishlist + Stars Completado

| Campo | Valor |
|-------|-------|
| SHA corto | 1bb87d1 |
| Mensaje | feat: confirm modals for delete and duplicate, fix wishlist editing, stars editable for all statuses |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-17-modales-y-fix-edit.md |

**Archivos tocados:** public/index.html — EDIT (deleteModalOverlay, duplicateModalOverlay, openEditModal por _id, toggleEditRating siempre block, rating guardado para todos los status)
**Verificación:** 5/5 true ✅
**Estado:** ✅ Validado

### FASE 17 HOTFIX — Modal duplicado z-index detrás del modal agregar

| Campo | Valor |
|-------|-------|
| SHA corto | 80ee403 |
| Mensaje | fix: raise z-index of duplicate and delete modals above add-game modal |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-17-hotfix-duplicate-zindex.md |

**Archivos tocados:** public/index.html — EDIT (#duplicateModalOverlay z-index:1100, #deleteModalOverlay z-index:1100)
**Verificación:** 2/2 true ✅
**Estado:** ✅ Validado en producción

---

## FASE 16 — Mayor frecuencia de íconos + repulsión al mouse

| Campo | Valor |
|-------|-------|
| SHA corto | 0920390 |
| Mensaje | feat: increase icon count to 42 and add mouse repulsion effect |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-16-icon-repulsion.md |

**Archivos tocados:** public/index.html — EDIT (COUNT 28→42, mouseX/Y tracking, bloque repulsión radio 110px fuerza 5, speed damping 0.92)
**Verificación:** 4/4 true ✅
**Estado:** ✅ Validado en producción

---

## FASE 15 — Íconos más grandes + bombas con explosión
| Campo | Valor |
|-------|-------|
| SHA corto | 58d91d8 |
| Mensaje | feat: bigger icons (PS=5) + bomb explosion animation |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-15-bigger-bomb-icons.md |

**Archivos tocados:** public/index.html — EDIT (PS=5, BOMB_ICON, spawnExplosion, fuseFlicker, drawExplosions)
**Verificación:** 4/4 true ✅
**Estado:** ✅ Validado

---

## FASE 3 — Frontend Social UI + Deploy

| Campo | Valor |
|-------|-------|
| SHA corto | be33390 |
| Mensaje | feat: frontend social UI, rating field, delete endpoint, static files |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-3-frontend-deploy.md |

**Archivos tocados:**
- `src/models/Game.js` — EDIT (campos rating, coverUrl)
- `src/routes/games.js` — EDIT (DELETE endpoint)
- `src/app.js` — EDIT (express.static)
- `public/index.html` — NUEVO (frontend completo)
- `docs/GOLD_RULES_AGENT.md` — NUEVO (reglas del agente)
- `prompts/fase-3-frontend-deploy.md` — NUEVO (prompt de fase)

**Total:** 789 inserciones

**Notas:** DNS local bloquea Atlas — no afecta Render/producción.

---

## FASE 4 — Dragón pixel art en el fondo

| Campo | Valor |
|-------|-------|
| SHA corto | 0192e18 |
| Mensaje | feat: pixel art purple dragon background |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-4-dragon-background.md |

**Archivos tocados:**
- `public/index.html` — EDIT (canvas + script pixel art dragón)
- `prompts/fase-4-dragon-background.md` — NUEVO

**Notas:** DNS local persiste (no afecta — canvas es puro client-side).

### FASE 4B HOTFIX — Dragón animado con fuego

| Campo | Valor |
|-------|-------|
| SHA corto | 3aa954c |
| Mensaje | feat: animated pixel art dragon with fire breath |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-4b-dragon-animated.md |

**Archivos tocados:**
- `public/index.html` — EDIT (script dragón animado: alas 8fps + partículas fuego)
- `prompts/fase-4b-dragon-animated.md` — NUEVO

**Notas:** Canvas puro client-side. DNS Atlas no afecta la animación.

### FASE 4C HOTFIX — Dragon fix coordenadas explícitas + 1/4 pantalla

| Campo | Valor |
|-------|-------|
| SHA corto | e45c667 |
| Mensaje | fix: pixel art dragon explicit coordinates, 1/4 screen size |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-4c-dragon-fix.md |

**Archivos tocados:**
- `public/index.html` — EDIT (canvas size + dragon rediseñado coordenadas explícitas)
- `prompts/fase-4c-dragon-fix.md` — NUEVO

### FASE 4D — Verde esmeralda + fuego a mitad de pantalla

| Campo | Valor |
|-------|-------|
| SHA corto | 47a5d9f |
| Mensaje | feat: dragon green palette, wide fire reaching half screen |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-4d-dragon-green-fire.md |

**Archivos tocados:**
- `public/index.html` — EDIT (paleta verde, canvas 70vw, fuego largo, offset dragón)
- `prompts/fase-4d-dragon-green-fire.md` — NUEVO

### FASE 4E — Dragón definitivo (logo Dragon reference, 48x36 px) — REVERTIDO/SUPERADO por Fase 5

| Campo | Valor |
|-------|-------|
| SHA corto | 852e7d4 |
| Mensaje | feat: definitive pixel art dragon from logo reference, animated fire |
| Fecha | 2026-05-28 |
| Branch | main |
| Prompt origen | prompts/fase-4e-dragon-final.md |

**Archivos tocados:**
- `public/index.html` — EDIT (pixel art 48x36 desde imagen referencia, ala animada 3 frames, fuego largo, texto GameTracker)
- `prompts/fase-4e-dragon-final.md` — NUEVO

---

## FASE 5 — Green Dragon definitivo (64x56 grid, imagen referencia recoloreada)

| Campo | Valor |
|-------|-------|
| SHA corto | e9931ac |
| SHA completo | pendiente — confirmar con `git log --format="%H" -1` |
| Mensaje | feat: green pixel art dragon with animated fire stream |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-5-dragon-green.md |

**Archivos tocados:**
- `public/index.html` — EDIT (nuevo dragón verde 64x56 px, opacity via globalAlpha 0.85, alas 3 frames WING_N/U/D, partículas fuego vx negativo cruzando >50% canvas)
- `prompts/fase-5-dragon-green.md` — NUEVO

**Total:** ~26KB de pixel data + animation script

**Notas:** Dragón construido con Python (PIL) desde imagen referencia. Reemplazo completo del script anterior. Verificación node: dragonCanvas ✅ NON_WING ✅ requestAnimationFrame ✅

---

## FASE 6 — Dynamic Gaming Background (Floating Pixel Art Icons)

| Campo | Valor |
|-------|-------|
| SHA corto | a1db429 |
| SHA completo | pendiente — confirmar con `git log --format="%H" -1` |
| Mensaje | feat: dynamic gaming background with floating pixel art icons |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-6-background-gaming.md |

**Archivos tocados:**
- `public/index.html` — EDIT (dragonCanvas → bgCanvas full-screen, script dragón reemplazado por 28 íconos pixel art flotantes: moneda, corazón, estrella, espada, controller, escudo, hongo, diamante)
- `prompts/fase-6-background-gaming.md` — NUEVO

**Notas:** Verificación node: bgCanvas ✅ ICONS ✅ requestAnimationFrame ✅ dragonCanvas GONE ✅

---

## FASE 7 — Pixel Art Leather Glove Cursor

| Campo | Valor |
|-------|-------|
| SHA corto | 0d98c11 |
| SHA completo | pendiente |
| Mensaje | feat: pixel art leather glove cursor with press animation |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-7-cursor-glove.md |

**Archivos tocados:**
- `public/index.html` — EDIT (CSS cursor:none + data URI base64 guante cuero, JS mousedown/mouseup swap cursor)
- `prompts/fase-7-cursor-glove.md` — NUEVO

**Notas:** Verificación node: 4/4 true ✅

### FASE 7 HOTFIX — CSS specificity + hotspot fix

| Campo | Valor |
|-------|-------|
| SHA corto | 7a515ac |
| Mensaje | fix: custom cursor hotspot and css specificity |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-7-hotfix-cursor.md |

**Archivos tocados:**
- `public/index.html` — EDIT (CSS reescrito con `html,body,*` + clase `.cursor-press`, JS cambiado a classList)

**Notas:** Verificación node: 3/3 true ✅

## FASE 14 — Prevenir duplicados y proteger completados de eliminación

| Campo | Valor |
|-------|-------|
| SHA corto | 4fa8522 |
| Mensaje | feat: prevent duplicate games and protect completed from deletion |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-14-protect-completed.md |

**Archivos tocados:**
- `public/index.html` — EDIT (saveGame con chequeo duplicados, X condicional en completados)

**Notas:** Verificación node: 2/2 true ✅

---

## FASE 13 — Lock Completado + Título readonly + Hover Estrellas

| Campo | Valor |
|-------|-------|
| SHA corto | d0a1ce6 |
| Mensaje | feat: lock completed status, readonly title, star hover animation |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-13-lock-completed.md |

**Archivos tocados:**
- `public/index.html` — EDIT (readonly editTitle, confirmCompletePanel, hoverEditStars, onEditStatusChange, acceptComplete/rejectComplete, lock select si ya completado)

**Notas:** Verificación node: 5/5 true ✅

---

### FASE 12 HOTFIX — Cache-Control no-store en Express

| Campo | Valor |
|-------|-------|
| SHA corto | 805fae1 |
| Mensaje | fix: disable html caching to force fresh deploy |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-12-hotfix-cache.md |

**Archivos tocados:**
- `src/app.js` — EDIT (middleware no-cache antes de express.static, etag:false, lastModified:false)

**Notas:** Verificación: no-cache ✅ etag false ✅

---

## FASE 12 — Edit/Delete + Status Pendiente + Rating por Completado

| Campo | Valor |
|-------|-------|
| SHA corto | 92f0a65 |
| Mensaje | feat: edit/delete cards, status pending, rating only on completed |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-12-edit-delete.md |

**Archivos tocados:**
- `src/models/Game.js` — EDIT (enum + 'pending')
- `src/routes/games.js` — EDIT (PUT /:id endpoint)
- `public/index.html` — EDIT (CSS card-actions/btn-edit, tab Pendiente, modal edición, canRate logic)

**Notas:** Verificación node: 5/5 true ✅

---

## FASE 11 — Paginación 5 juegos por página

| Campo | Valor |
|-------|-------|
| SHA corto | 47686c9 |
| Mensaje | feat: pagination 5 games per page with numbered navigation |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-11-paginacion.md |

**Archivos tocados:**
- `public/index.html` — EDIT (CSS pagination, div#pagination, GAMES_PER_PAGE=5, renderPagination, goToPage, pageGames.map)

**Notas:** Verificación node: 4/4 true ✅

---

## FASE 10 — Top 3 Géneros más jugados

| Campo | Valor |
|-------|-------|
| SHA corto | ecb2f79 |
| Mensaje | feat: show top 3 most played genres instead of 6 |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-10-top-generos.md |

**Archivos tocados:**
- `public/index.html` — EDIT (título "Top Géneros más jugados", slice 6→3)

**Notas:** Verificación node: 3/3 true ✅

---

## FASE 9 — Social Media Links Card

| Campo | Valor |
|-------|-------|
| SHA corto | c95e0e2 |
| Mensaje | feat: social media links card with SVG icons |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-9-social-links.md |

**Archivos tocados:**
- `public/index.html` — EDIT (CSS social-card + 7 íconos SVG: X, Twitch, Discord, YouTube, Steam, Instagram, TikTok)

**Notas:** Verificación node: 3/3 true ✅

---

## FASE 8 — Favicon pixel art G + controller

| Campo | Valor |
|-------|-------|
| SHA corto | a53c112 |
| Mensaje | feat: add pixel art G controller favicon |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-8-favicon.md |

**Archivos tocados:**
- `public/index.html` — EDIT (`<link rel="icon" href="/favicon.png">` en `<head>`)
- `public/favicon.png` — NUEVO (logo G pixel art con controller, 1024x1024)

**Notas:** Verificación node: true ✅

---

### FASE 7 HOTFIX 4 — Tamaño cursor 32px estándar

| Campo | Valor |
|-------|-------|
| SHA corto | pendiente |
| Mensaje | fix: reduce cursor size to 32px standard |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-7-hotfix4-cursor-size.md |

**Archivos tocados:**
- `public/index.html` — EDIT (width/height 64→32px, transform hotspot ajustado)

**Notas:** ✅ Validado en producción — cursor visible y bien posicionado

---

### FASE 7 HOTFIX 3 — 4 estados finales desde imagen referencia

| Campo | Valor |
|-------|-------|
| SHA corto | e5ce60c |
| Mensaje | feat: pixel art leather glove cursor 4 states (normal/hand/clicking/grab) |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-7-hotfix3-cursor-final.md |

**Archivos tocados:**
- `public/index.html` — EDIT (4 cursores b64 desde cursors.png: normal/hand/clicking/grab, mouseover→hand, mousedown→clicking, mouseup→normal/hand)
- `public/cursors.png` — NUEVO (sprite sheet 1408x768 con 4 estados)

**Notas:** Verificación node: 3/3 true ✅

### FASE 7 HOTFIX 2 — JS element cursor (browser-compatible)

| Campo | Valor |
|-------|-------|
| SHA corto | 480fb72 |
| Mensaje | fix: js-based custom cursor element instead of css url() |
| Fecha | 2026-05-29 |
| Branch | main |
| Prompt origen | prompts/fase-7-hotfix2-cursor.md |

**Archivos tocados:**
- `public/index.html` — EDIT (cursor via `<img #custom-cursor>` JS mousemove, mousedown/mouseup swap src)

**Notas:** Verificación node: 3/3 true ✅

const express = require('express');
const cors = require('cors');
const path = require('path');
const healthRouter = require('./routes/health');
const gamesRouter = require('./routes/games');

const app = express();

app.use(cors());
app.use(express.json());
// No cachear HTML para que siempre se sirva la versión más reciente
app.use((req, res, next) => {
  if (req.path === '/' || req.path.endsWith('.html')) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});
app.use(express.static(path.join(__dirname, '../public'), { etag: false, lastModified: false }));

app.use('/health', healthRouter);
app.use('/games', gamesRouter);

module.exports = app;

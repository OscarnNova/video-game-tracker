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

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

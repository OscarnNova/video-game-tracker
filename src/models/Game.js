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
    enum: ['playing', 'completed', 'pending', 'wishlist'],
    default: 'wishlist'
  },
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
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);

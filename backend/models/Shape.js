const mongoose = require('mongoose');

const shapeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Polygon', 'Point', 'LineString'], // Example shape types
    required: true,
  },
  coordinates: {
    type: [mongoose.Schema.Types.Mixed], // Store GeoJSON-like coordinates
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Shape', shapeSchema);

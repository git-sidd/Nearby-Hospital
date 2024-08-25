const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  emergencyContact: String,
  lat: Number,
  lon: Number,
});

module.exports = mongoose.model('Hospital', hospitalSchema);

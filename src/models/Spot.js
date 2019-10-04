const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: []
})

module.exports = mongoose.model('Spot', SpotSchema);

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  user: String,
  urlPhoto: String,
  title: String,
  description: String
});

const PhotoModel = mongoose.model('photos', photoSchema);

module.exports = {
  PhotoModel
}
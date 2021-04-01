const mongoose = require('mongoose');

const { Schema } = mongoose;

const kittenSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Kitten', kittenSchema);

const mongoose = require('mongoose')

const Vagas = new mongoose.Schema({
  status: { type: Boolean, required: true },
  number: { type: Number, required: true },
  type: { type: String, required: true },
}, {
  timestamps: true
})

module.exports = mongoose.model('Vagas', Vagas)
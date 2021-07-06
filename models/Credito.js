const mongoose = require('mongoose')
const { Schema } = mongoose

const creditoSchema = new Schema({
  no_matricula: String,
  monto: Number,
  periodo: String,
  carrera: String,
  no_certificacion: String,
  fecha: Date,
})

const Credito = mongoose.model('fundapec_credito', creditoSchema)

module.exports = Credito
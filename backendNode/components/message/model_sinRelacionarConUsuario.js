const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date
});

//modelo que me permite realcionar la base de datos
//con el Schema, el primer parametro es la coleccion
//a la que voy a enviar el dato, el segundo es el esquema.
const model = mongoose.model('Message', mySchema, this.collection='Message')

module.exports = model;

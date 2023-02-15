const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
});

//modelo que me permite realcionar la base de datos
//con el Schema, el primer parametro es la coleccion
//a la que voy a enviar el dato, el segundo es el esquema.
const model = mongoose.model('User', mySchema, this.collection='User')

module.exports = model;

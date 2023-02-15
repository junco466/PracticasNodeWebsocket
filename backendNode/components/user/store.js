const Model = require('./model')

function addUser(user){
  const myUser = new Model(user);
  return myUser.save();
}

function getUser(){

  //las consultas del Schema, por defecto devuelven
  //una promesa, por lo que no es necesario usar async
  //o crear otra promesa.
  return Model.find();
}
module.exports = {
  add: addUser,
  list: getUser,
}

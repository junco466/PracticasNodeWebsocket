const store = require('./store');

//Funcion para el metodo HTTP POST
function addUser(name) {
  if (!name){
    return Promise.reject('Invalid name');
  }

  const user = {
    name,
  };

  return store.add(user);
}


//Funcion para el metodo HTTP GET
function getUser(){
  return store.list();
}



module.exports = {
  addUser,
  getUser,
}

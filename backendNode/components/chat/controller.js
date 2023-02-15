const store = require('./store');

//Funcion para el metodo HTTP POST
function addChat(users) {
  if (!users || !Array.isArray(users)){
    return Promise.reject('Invalid user list');
  }

  const chat = {
    users: users,
  };

  return store.add(chat);
}


//Funcion para el metodo HTTP GET
function listChats(userId){
  return store.list(userId);
}



module.exports = {
  addChat,
  listChats,
}

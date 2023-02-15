
//traigo el objeto scoket previamente creado, con sus metodos especiales
const socket = require('../../socket').socket;
const store = require('./store');


//---------------------------------------------------------------------------------


//Funcion para el metodo HTTP POST
function addMessage(chat, user, message, file){
  return new Promise ((resolve, reject) => {
    if(!chat || !user || !message){
      console.error('[messageController]: No hay usuario o mensaje');
      reject('los datos son incorrectos');
      return false;
    };

    let fileUrl = '';
    if (file){
      fileUrl = 'http://localhost:3000/app/files/' + file.filename
      //fileUrl = `${req.protocol}://${req.get('host')}/${req.file.destination}${req.file.filename}`;
    //   fileUrl = file
    // ? config.host + ':' + config.port + config.publicRoute +
    //    '/files/' + file.filename
    // : '';
    }
    const fullMessage = {
      "chat": chat,
      "user": user,
      "message": message,
      "date": new Date(),
      "file": fileUrl
    };

    store.add(fullMessage);

    //Emito un mensaje en el canal message, donde toda la app podra escuchar
    //los mensajes, este lo vamos a llamar desde socket.html
    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });


}


//---------------------------------------------------------------------------------


//Funcion para el metodo HTTP GET
function getMessage(filterUser){
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  })
}


//---------------------------------------------------------------------------------


//Funcion para el metodo HTTP PATCH
function updateMessage(id, message){
  return new Promise(async (resolve, reject) =>{
    if(!id || !message){
      reject('Invalid data');
      return false;
    }

    const result = await store.updateText(id, message);
    resolve(result);
  })
}


//---------------------------------------------------------------------------------


//Funcion para el metodo HTTP DELETE
function deleteMessage(id){
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Id invalido');
      return false;
    }

    store.remove(id)
      .then(() => {
        resolve();
      }).catch(e => {
        reject(e);
      })
  })
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
}

//importo modulo wensocket
const socketIO = require('socket.io');
//registro, donde voy a alamcenar el objeto websocket
const socket = {};

function connect(server){
  //incio el objeto que tiene los metodos para websocket
  //lo guardo en el objeto socket, para acceder desde el.
  socket.io = socketIO(server);
}

module.exports = {
  connect,
  socket,
}

const express = require('express');
const app = express();
//modulo http, requerido para iniciar un servidor clasico de nodejs sin express
//el cual permite correr websocket
const server = require('http').Server(app)

const bodyParser = require('body-parser');
//const router = require('./components/message/network');
const router = require('./network/routes');
const db = require('./database/db');
const url = require('./database/key_uri');
//require para traer las configuraciones de websocket
const socket = require('./socket');

const port = 3001;

db(url.db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

//Envio mi servidor a la funcion que inicializa websocket
socket.connect(server);

router(app);

// app.use('/', function(req, res){
//     res.send('hola');
// });

//Agregar archivos estaticos a node (html, css ,etc)
app.use('/app', express.static('public'));

//Para websocket, el servidor se debe iniciar desde el server
//configurado con el modulo http
server.listen(port, () =>{
  console.log('servidor escuchando en el puerto => ... ' + port);
})

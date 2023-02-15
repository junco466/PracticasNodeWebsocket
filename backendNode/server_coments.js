const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

let app = express();
const router = express.Router();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get('/message', (req, res) => {
  //LEER CABECERAS
  console.log(req.header);
  //enviar cabeceras como respuesta
  res.header({
    "custom-header":"Nuestro valor personalizado",
  })
  res.send('lista de mensajes');
});

router.post('/message', (req, res) => {
  //request al body para ver el contenido de la peticion
  console.log(req.body);

  //request tipo query para acceder a los parametros por URL
  console.log(req.query);
  res.send('mensaje añadido');
});

router.delete('/message', (req, res) => {
  res.status(202).send([{error : "", body: "Eliminado Correctamente" }]);
});

app.use(router);

// app.use('/', function(req, res){
//     res.send('hola');
// });

app.listen(port, () =>{
  console.log('servidor corriendo en el puerto => ... ' + port);
})

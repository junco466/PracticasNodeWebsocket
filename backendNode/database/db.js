const db = require('mongoose');

//mongodb+srv://<UserName>:<Password>@cluster0.xn1mr.mongodb.net/<DataBase>?retryWrites=true&w=majority


db.Promise = global.Promise;

async function connect(url){

  //CONEXION BASE DE DATOS CON USANDO
  //ASYNC AWAIT PARA VERIFICAR CONEXION
  await db.connect(url,{
    useNewUrlParser: true,
  });
  //Con await nos aseguramos que el consolo.log
  //solo se ejecute luego de la conexion
  console.log('[db]: conexion exitosa')


  //CONEXION BASE DE DATOS CON USANDO
  //PROMESAS DEL MIDDLEWARE PARA VERIFICAR CONEXION
  // db.connect(uri.db, {
  //   useNewUrlParser: true,
  // })
  //   .then(() =>{
  //     console.log('[db]: Conexion exitosa')
  //   }).catch(e => {
  //     console.error(e)
  //   })
}

module.exports = connect;



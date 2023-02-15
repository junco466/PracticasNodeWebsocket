const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const multer = require('multer');


const router = express.Router();


//---------------------------------------------------------------------------------
//MULTER MANEJO DE ARCHIVOS BINARIOS
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/files')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: storage,
})

// const upload = multer({
//   dest: 'uploads/',
// })

//---------------------------------------------------------------------------------


//METODO HTTP GET
router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;

  controller.getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500 ,e)
    })
});


//---------------------------------------------------------------------------------


//METODO HTTP POST
router.post('/', upload.single('file'), (req, res) => {


  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) =>{
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Error inesperado', 400, 'Error en el controlador');
    });

});


//---------------------------------------------------------------------------------


//METODO HTTP PATCH
router.patch('/:id', function(req, res){

  controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
      response.success(req,res,data,200)
    }).catch(e =>{
      response.error(req, res,'Error interno', 500, e)
    })
})

//---------------------------------------------------------------------------------


//METODO HTTP DELETE
router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req,res, `Usuario ${req.params.id} eliminado`, 200)
    }).catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    })
});

module.exports = router;

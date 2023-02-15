const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();

//METODO HTTP POST
router.post('/', function (req, res){

  console.log(req.body);
  controller.addUser(req.body.name)
    .then( data => {
      response.success(req, res, data, 201);
    }).catch(e =>{
      response.error(req, res, 'Internal error', 500 , e);
    })
})


//METODO HTTP GET
router.get('/', (req, res) => {

  controller.getUser()
    .then((userList) => {
      response.success(req, res, userList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500 ,e)
    })
});

module.exports = router;

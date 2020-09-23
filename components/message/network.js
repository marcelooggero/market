const express = require('express');
const multer = require('multer')

const config = require('../../config')
const response = require('../../network/response')
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest:'public/'+ config.filesRoute + '/'
})

router.get('/', function(req, res){
    
    const filterUser = req.query.user || null
    const filterMessage = req.query.message || null
    
    controller.getMessages(filterUser, filterMessage)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e)
    })

});


router.post('/', upload.single('file'), function(req, res){
    console.log(req.file)
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 201)
    })
    .catch(e=>{
        response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador')
    })
});

router.patch('/:id', function(req, res){
    console.log(req.params.id)

    controller.updateMessage(req.params.id, req.body.message)//id y text
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch(e=>{
        response.error(req, res, 'Error interno', 500, e)
    })

    res.send('ok')
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e=>{
        response.error(req, res, 'Error interno', 500, e)
    })
})


module.exports = router;
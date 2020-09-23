const express = require('express');
const response = require('../../network/response')
const router = express.Router();
const controller = require('./controller');

router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then((data) => {
        response.success(req, res, data, 201)
    })
    .catch(e => {
        response.error(req, res, 'Internal error', 500, e)
    })

});


router.get('/:userId', function(req, res){
    controller.listChats(req.params.userId)
    .then((users)=>{
        response.success(req, res, users, 200)
    })
    .catch(e=>{
        response.error(req, res, 'Internal error', 500, e)
    })
});

// router.patch('/:id', function(req, res){
//     console.log(req.params.id)

//     controller.updateMessage(req.params.id, req.body.message)//id y text
//     .then((data)=>{
//         response.success(req, res, data, 200)
//     })
//     .catch(e=>{
//         response.error(req, res, 'Error interno', 500, e)
//     })

//     res.send('ok')
// })

// router.delete('/:id', function(req, res){
//     controller.deleteMessage(req.params.id)
//     .then(()=>{
//         response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
//     })
//     .catch(e=>{
//         response.error(req, res, 'Error interno', 500, e)
//     })
// })


module.exports = router;
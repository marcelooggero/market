const config = require('../../config');
const store = require('./store')
const socket = require('../../socket').socket


function addMessage(chat, user, message, file){
    return new Promise((resolve, reject) => {
        if(!chat || !user || ! message){
            console.error('[message controller] No hay chat o usuario o mensaje')
            return reject('Los datos son incorrectos');
        }

        let fileUrl = ''
        if(file){
            fileUrl = config.host + ':' + config.port + config.publicRoute + '/' + config.filesRoute + '/' + file.filename
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
        // console.log(fullMessage)
        store.add(fullMessage)

        socket.io.emit('message', fullMessage)

        resolve(fullMessage)
    })
}

function getMessages(filterUser, filterMessage){
    return new Promise((resolve, reject)=>{
        try{
            resolve(store.list(filterUser, filterMessage))
        }catch(error){
            reject(error)
        }
    })
}

function updateMessage(id, message){
    return new Promise(async(resolve, reject) => {
        console.log(id)
        console.log(message)
        if(!id || !message){
          return reject('Invalid data')
            
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            return reject('Id invalido')
        }
        store.remove(id)
            .then(()=>{
                resolve()
            })
            .catch(e=>{
                reject(e)
            })
    })
}

module.exports = {
    addMessage,  
    getMessages,
    updateMessage,
    deleteMessage
};

const Model = require('./model')



function  addMessage(message){
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessage(filterUser, filterMessage){
    return new Promise((resolve, reject)=>{

        let filter = {}
        if(filterUser){
            filter = {
                user: new RegExp(`^${filterUser}$`, "i")
            }
        }
        // console.log(filter)
        if(filterMessage){
            filter = {
                ...filter,
                message: new RegExp(`^${filterMessage}$`, "i")
            }
        }
        // console.log(filter)
        Model.find(filter)
        .populate('user')
        .exec((error, populated)=>{
            if(error){
                reject(error)
                return false
            }
            resolve(populated)
        })
    })
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
    //get
    //update
    //delete
}
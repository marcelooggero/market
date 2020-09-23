const store = require('./store')

function addChat(users){
        if(!users || !Array.isArray(users)) {
            return Promise.reject('Invalid user list');
        }
        const chat = {
            users: users,
        }
        return store.add(chat)
}

function listChats(userId){
    return store.list(userId)

}

// function updateMessage(id, message){
//     return new Promise(async(resolve, reject) => {
//         console.log(id)
//         console.log(message)
//         if(!id || !message){
//           return reject('Invalid data')
            
//         }
//         const result = await store.updateText(id, message)
//         resolve(result)
//     })
// }

// function deleteMessage(id){
//     return new Promise((resolve, reject) =>{
//         if(!id){
//             return reject('Id invalido')
//         }
//         store.remove(id)
//             .then(()=>{
//                 resolve()
//             })
//             .catch(e=>{
//                 reject(e)
//             })
//     })
// }

module.exports = {
    addChat,  
    listChats
    // updateMessage,
    // deleteMessage
};
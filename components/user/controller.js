const store = require('./store')


function getUsers(){
    return new Promise((resolve, reject)=>{
        try{
            resolve(store.list())
        }catch(error){
            reject(error)
        }
    })
}





function addUser(name){
   
   if(!name){
       return Promise.reject('Invalid name')
   }
   const user = {
    name,
   }
   return store.add(user)
}

module.exports = {
    addUser,  
    getUsers,
    // updateMessage,
    // deleteMessage
};
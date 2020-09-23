const Model = require('./model')


async function getUser(){
    // if(filterUser){
    //     filter = {
    //         name: new RegExp(`^${filterUser}$`, "i")
    //     }
    // }
    
    const users = await Model.find()
    return users
}




function addUser(user){
    const myUser = new Model(user)
    return myUser.save()
}

module.exports = {
    add: addUser,
    list: getUser

}
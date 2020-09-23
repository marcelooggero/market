const db = require('mongoose')

db.Promise = global.Promise;
//'mongodb+srv://user:user1234@cluster0.wly2v.mongodb.net/telegram?retryWrites=true&w=majority'
async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    
    console.log('[db] Conectada con éxito')

}

module.exports = connect
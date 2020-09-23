const express = require('express')
const app = express()
const server = require('http').Server(app)
require('dotenv').config() 

const cors = require('cors')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')
const config = require('./config')

db(config.dbUrl)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

socket.connect(server)
router(app);


app.use('/'+ config.publicRoute, express.static('public'));


server.listen(config.port, function (){
    console.log('La app esta escuchando en ' + ':' +  config.host + config.port);

});
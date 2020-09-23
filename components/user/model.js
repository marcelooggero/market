const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    // user: String,
    // message: {
    //     type: String,
    //     required: true
    // },
    // date: Date 
})

const model = mongoose.model('User', mySchema)
module.exports = model
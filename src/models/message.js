const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    content:{
        type: String,
        trim: true,
    },
    user:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Message',messageSchema);

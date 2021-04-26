var mongose = require('mongoose');
module.exports = mongose.model('User',{
    email: String,
    password : String
})
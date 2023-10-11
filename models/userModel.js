const mongoose = require('mongoose');

mongoose.userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,

},
{
    timestamps: true
});

module.exports = mongoose.model('User', mongoose.userSchema);

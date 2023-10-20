const mongoose = require('mongoose');

mongoose.userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    role: Object,
    email: String,
    password:String,
    is_varified: Boolean,

},
{
    timestamps: true
});

module.exports = mongoose.model('User', mongoose.userSchema);

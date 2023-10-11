const mongoose = require('mongoose');

mongoose.productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
},
{
    timestamps: true
});

module.exports = mongoose.model('Product', mongoose.productSchema);

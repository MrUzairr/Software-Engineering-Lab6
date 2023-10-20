const mongoose = require('mongoose');

mongoose.purchaseHistorySchema = new mongoose.Schema({
    purchase_date: Date,
    quantity: Number,
    total_cost: Number,
    payment_method: String,
    payment_status: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('PurchaseHistory', mongoose.purchaseHistorySchema);

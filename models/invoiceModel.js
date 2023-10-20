const mongoose = require('mongoose');

mongoose.invoiceSchema = new mongoose.Schema({
    invoice_number: Number,
    customer_name: String,
    invoice_date: Date,
    total_amount: Number,
    payment_status: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Invoice', mongoose.invoiceSchema);

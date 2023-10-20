const Invoice = require('../models/invoiceModel');

async function createInvoice(req,res){
    try {
        console.log(req.body);
        const invoice = await Invoice.create(req.body);
        res.status(201).json(invoice);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getAllInvoices(req,res){
    try {
        const invoice = await Invoice.find();
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
async function updateInvoice(req,res){
    try {
        const invoice = await Invoice.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
async function deleteInvoice(req,res){
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    createInvoice,
    getAllInvoices,
    updateInvoice,
    deleteInvoice
};
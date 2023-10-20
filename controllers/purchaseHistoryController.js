const PurchaseHistory = require('../models/purchaseHistoryModel');

async function createPurchaseHistory(req,res){
    try {
        console.log(req.body);
        const purchaseHistory = await PurchaseHistory.create(req.body);
        res.status(201).json(purchaseHistory);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getAllPurchaseHistorys(req,res){
    try {
        const purchaseHistory = await PurchaseHistory.find();
        res.status(200).json(purchaseHistory);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
async function updatePurchaseHistory(req,res){
    try {
        const purchaseHistory = await PurchaseHistory.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(purchaseHistory);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
async function deletePurchaseHistory(req,res){
    try {
        const purchaseHistory = await PurchaseHistory.findByIdAndDelete(req.params.id);
        res.status(200).json(purchaseHistory);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    createPurchaseHistory,
    getAllPurchaseHistorys,
    updatePurchaseHistory,
    deletePurchaseHistory
};
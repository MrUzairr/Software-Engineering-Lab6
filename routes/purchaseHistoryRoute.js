const express = require('express');

const router = express.Router();
const purchaseHistoryController = require('../controllers/purchaseHistoryController');


// create a new product

router.post('/purchasehistorys',purchaseHistoryController.createPurchaseHistory);
router.get('/getallpurchasehistory',purchaseHistoryController.getAllPurchaseHistorys);
router.put('/updatepurchasehistory/:id',purchaseHistoryController.updatePurchaseHistory);
router.delete('/deletepurchasehistory/:id',purchaseHistoryController.deletePurchaseHistory);


module.exports = router;
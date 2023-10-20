const express = require('express');

const router = express.Router();
const invoiceController = require('../controllers/invoiceController');


// create a new product

router.post('/invoices',invoiceController.createInvoice);
router.get('/getallinvoices',invoiceController.getAllInvoices);
router.put('/updateinvoice/:id',invoiceController.updateInvoice);
router.delete('/deleteinvoice/:id',invoiceController.deleteInvoice);


module.exports = router;
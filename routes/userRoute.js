const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/users',userController.addUser);
router.get('/getallusers',userController.getAllUser);
router.put('/updateuser/:id',userController.updateUser);
router.delete('/deleteuser/:id',userController.deleteUser);


module.exports = router;
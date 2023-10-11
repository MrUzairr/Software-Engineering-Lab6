const User = require('../models/userModel');

async function addUser(req,res){
    try {
        const users = await User.create(req.body);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
async function getAllUser(req,res){
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    getAllUser,
    addUser,
};
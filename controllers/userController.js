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

async function updateUser(req,res){
    try {
        console.log(req.params.id)
        console.log(req.body)
        const users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
async function deleteUser(req,res){
    try {
        const users = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    getAllUser,
    addUser,
    updateUser,
    deleteUser

};
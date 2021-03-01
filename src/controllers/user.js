const User = require('../models/user');

module.exports = { //callback promise listenign async await method async

    index: async (req, res, next) => { //function async
        const users = await User.find({});//query async
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => { //replace ALL user data method PUT http
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    updateUser: async (req, res, next) => { //replace one or more fields PATCH http method
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },

    deleteUser: async (req, res, next) => { //replace one or more fields PATCH http method
        const { userId } = req.params;
        const oldUser = await User.findByIdAndRemove(userId);
        res.status(200).json({ success: true });
    },

};
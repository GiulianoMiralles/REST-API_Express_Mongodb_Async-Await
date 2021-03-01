const User = require('../models/user');
const Car = require('../models/car');

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

    deleteUser: async (req, res, next) => { 
        const { userId } = req.params;
        const oldUser = await User.findByIdAndRemove(userId);
        res.status(200).json({ success: true });
    },

    getUsersCars: async (req, res, next) => {
        const { userId } = req.params;
        const user = await (await User.findById(userId)).populated('cars');
        res.status(200).json(user);
    },

    newUsersCar: async (req, res, next) => {
        const { userId } = req.params;
        const newCar = new Car(req.body);
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar);
    }

};
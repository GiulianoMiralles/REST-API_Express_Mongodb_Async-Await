const User = require('../models/user');

module.exports = { //callback promise listenign async await method async

    index: async (req, res, next) =>{ //function async
        const users = await User.find({});//query async
        res.status(200).json(users);
    }

};
const router = require('express-promise-router')();

const {
    index, getUser
} = require('../controllers/user');

router.get('/', index);

module.exports = router;
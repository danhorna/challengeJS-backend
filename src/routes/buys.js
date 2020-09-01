const { Router } = require('express');
const router = Router();
const { addBuy, checkBuy } = require('../controllers/buys_controllers');
const { cancelPur } = require('../controllers/purc_controllers');

router.route('/')
    .post(addBuy)

router.route('/check')
    .post(checkBuy)

router.route('/cancel')
    .post(cancelPur)
    
module.exports = router
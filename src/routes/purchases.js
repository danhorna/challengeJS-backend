const { Router } = require('express');
const router = Router();
const { getAppsPur} = require('../controllers/purc_controllers');


router.route('/')
    .post(getAppsPur)

module.exports = router
const { Router } = require('express');
const router = Router();
const { getHome } = require('../controllers/home_controllers')

router.route('/')
    .get(getHome)

module.exports = router
const { Router } = require('express');
const router = Router();
const { getApps, getDevApps, updateApp, deleteApp, newApp, getAppById } = require('../controllers/apps_controllers');

router.route('/')
    .get(getApps)

router.route('/getdevapps')
    .post(getDevApps)

router.route('/updateapp')
    .post(updateApp)

router.route('/deleteapp')
    .post(deleteApp)

router.route('/newapp')
    .post(newApp)

router.route('/getbyid')
    .post(getAppById)

module.exports = router
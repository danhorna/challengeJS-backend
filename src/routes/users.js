const { Router } = require('express');
const router = Router();
const { getUsers, createUser, updateUser, deleteUser, getUser, login, checkToken} = require('../controllers/users_controllers');


router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/login')
    .post(login)

router.route('/check')
    .post(checkToken)


module.exports = router;
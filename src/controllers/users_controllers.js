const userCtrl = {};
const db = require('../database');
const { response } = require('../app');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

const createToken = (user) => {
    let payload = {
        userId: user.id,
        userRol: user.rol,
        createdAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY);
}

userCtrl.checkToken = (req, res) =>{
    var payload = null;
    try {
        payload = jwt.decode(req.body.tokenls, process.env.TOKEN_KEY);
    } catch (err) {
        return res.json({
            done: 'invalid'
        })
    }
    if (moment().unix() > payload.expiresAt){
        return res.json({done: 'expired'});
    }

    res.json({
        done: 'accept'
    })
}

userCtrl.login = async (req,res) => {
    var { email, password } = req.body.data;
    const user = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (user.length == 0){
        console.log('no existe usuario con ese mail');
    } else {
        const compare = bcrypt.compareSync(password, user[0].password);
        if (!compare){
            console.log('La contraseña no coincide')
        } else {
            res.send(createToken(user[0])
            )
        }
    }
    res.end();
}
userCtrl.getUsers = async (req,res) => {
    const users = await db.query('SELECT * FROM usuarios');
    console.log(users);
    res.send('ver consola');
};
userCtrl.createUser = async (req,res) => {
    var { email, password, rol} = req.body.data;
    password = bcrypt.hashSync(password, 10);
    const newUser = {
        email,
        password,
        rol
    }
    await db.query('INSERT INTO usuarios set ?', [newUser]);
    res.end();
};
userCtrl.updateUser = async (req,res) => {
    const { email, password } = req.body;
    const updUser = {
        email,
        password
    }
    await db.query('UPDATE usuarios SET ? WHERE id = ?',[updUser, req.params.id]);
    res.send('usuario actualizado');
};
userCtrl.deleteUser = async (req,res) => {
    await db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
    res.send('user eliminado');
};
userCtrl.getUser = async (req,res) => {
    const user = await db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id]);
    console.log(user);
    res.send('ver consolita');
};

module.exports = userCtrl
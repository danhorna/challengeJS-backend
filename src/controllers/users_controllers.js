const userCtrl = {};
const db = require('../database');


userCtrl.getUsers = async (req,res) => {
    const users = await db.query('SELECT * FROM usuarios');
    console.log(users);
    res.send('ver consola');
};
userCtrl.createUser = async (req,res) => {
    const { email, password} = req.body;
    const newUser = {
        email,
        password
    }
    await db.query('INSERT INTO usuarios set ?', [newUser]);
    res.send('usuario creado')
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
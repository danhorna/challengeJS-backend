const buysCtrl = {}
const db = require('../database');

buysCtrl.addBuy = (req,res) => {
    db.query('INSERT INTO purchases (user_id, app_id) VALUE (?,?)', [req.body.userId, req.body.appId]);
    res.send('done')
}

buysCtrl.checkBuy = async (req,res) => {
    const compra = await db.query('SELECT * FROM purchases WHERE user_id = ? AND app_id = ?', [req.body.userId,req.body.appId]);
    if (compra.length > 0) res.send(true)
    else res.send(false)
}

module.exports = buysCtrl
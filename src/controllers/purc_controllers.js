const purcCtrl = {};
const db = require('../database');


purcCtrl.getAppsPur = async (req, res) =>{
    const purchases = await db.query('SELECT * FROM purchases WHERE user_id = ?', [req.body.id]);
    if (purchases.length == 0 ){
        res.json(null)
    } else {
        res.json(purchases);
    }
}

purcCtrl.cancelPur = async (req,res) =>{
    await db.query('DELETE FROM purchases WHERE id = ?', [req.body.data.idcompra]);
    res.send('done')
}

module.exports = purcCtrl
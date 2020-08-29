const appsCtrl = {};
const db = require('../database');
const app = require('../app');

appsCtrl.getApps = async (req,res) => {
    const apps = await db.query('SELECT * FROM apps');
    res.json(apps);
}

appsCtrl.getDevApps = async (req,res) => {
    const apps = await db.query('SELECT * FROM apps WHERE creator = ?', [req.body.id]);
    res.json(apps)
}

appsCtrl.updateApp = async (req,res) => {
    await db.query('UPDATE apps SET price = ?, logo = ? WHERE id = ?',[req.body.data.price,req.body.data.logo,req.body.data.id])
    res.send('done')
}

appsCtrl.deleteApp = async (req,res) =>{
    console.log(req.body.id)
    await db.query('DELETE FROM apps WHERE id = ?', [req.body.id]);
    res.send('done')
}
module.exports = appsCtrl
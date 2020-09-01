const appsCtrl = {};
const db = require('../database');

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
    await db.query('DELETE FROM apps WHERE id = ?', [req.body.data.id]);
    await db.query('DELETE FROM purchases WHERE app_id = ?',[req.body.data.id])
    res.send('done')
}

appsCtrl.newApp = (req,res) => {
    db.query('INSERT INTO apps (name,creator,category,price,logo) VALUES (?,?,?,?,?)',[req.body.data.name,req.body.data.creator,req.body.data.category,req.body.data.price,req.body.data.logo]);
    res.send('done')
}

appsCtrl.getAppById = async (req,res) => {
    const app = await db.query('SELECT * FROM apps WHERE id = ?',[req.body.app_id])
    res.send(app[0])
}

module.exports = appsCtrl
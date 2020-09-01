const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);  //guardamos en 'port' el puerto a usar. process.env.PORT nos dara el puerto definido en el servidor, en el caso de no existir usa por default el 3000.

//middlewares
app.use(cors());        //permite enviar y recibir datos entre servidores(back&front)
app.use(express.json());    //el servidor permite entender formatos json&strings

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies


//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/apps', require('./routes/apps'));
app.use('/api/purchases', require('./routes/purchases'));
app.use('/api/buy', require('./routes/buys'));

module.exports = app;
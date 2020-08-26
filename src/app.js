const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 3000);  //guardamos en 'port' el puerto a usar. process.env.PORT nos dara el puerto definido en el servidor, en el caso de no existir usa por default el 3000.

//middlewares
app.use(cors());        //permite enviar y recibir datos entre servidores(back&front)
app.use(express.json());    //el servidor permite entender formatos json&strings


//routes
app.use('/api/users', require('./routes/users'));


module.exports = app;
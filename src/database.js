const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.getConnection(error =>{
    if (error) throw error;
    console.log('DB conectada!');
});

connection.query = promisify(connection.query)

module.exports = connection
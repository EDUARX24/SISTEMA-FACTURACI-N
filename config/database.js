const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'up-de-fra1-mysql-1.db.run-on-seenode.com',
    port: 11550,
    user: 'db_59s6il620vju',
    password: 'p7rfu31kpj5Cm0dVNHLyFbd6',
    database: 'db_59s6il620vju'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conexión exitosa a la base de datos.');
});

module.exports = connection; 
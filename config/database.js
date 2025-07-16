const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'crossover.proxy.rlwy.net',
    user: 'root',
    password: 'ZATPiJwCfwtPrfYxoLpLJwilfyGTaJpe',
    database: 'sistema_facturacion'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conexión exitosa a la base de datos.');
});

module.exports = connection; 
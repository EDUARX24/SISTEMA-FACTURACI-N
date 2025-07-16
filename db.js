const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'up-de-fra1-mysql-1.db.run-on-seenode.com',
    port: 11550,
    user: 'db_59s6il620vju',
    password: 'p7rfu31kpj5Cm0dVNHLyFbd6',
    database: 'db_59s6il620vju',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
}).promise();

// Verificar la conexión
pool.getConnection()
    .then(connection => {
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = pool; 
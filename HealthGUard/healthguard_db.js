const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'healthguard-db.cns8os4awwbn.us-east-1.rds.amazonaws.com',
  user: 'healthguard',
  password: 'HealthGuard2025!',
  database: 'healthguard_db',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
});

connection.query('SELECT VERSION()', (error, results) => {
  if (error) throw error;
  console.log('Versão do MySQL:', results[0]);
  connection.end();
});

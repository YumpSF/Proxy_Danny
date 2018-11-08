const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'overview',
});

connection.connect();

module.exports = connection;

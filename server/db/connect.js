var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vuestudy'
});

connection.connect();

module.exports = connection;

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.host,
  user     : process.env.user,
  password : process.env.pass,
  database :process.env.db
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
module.exports = connection
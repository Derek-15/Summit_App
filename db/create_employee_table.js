var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cutler7788!",
  database: "summitdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE employees (employee_id INT AUTO_INCREMENT PRIMARY KEY, employee_fname VARCHAR(255), employee_lname VARCHAR(255), employee_email VARCHAR(255), employee_phone_number VARCHAR(255), employee_position VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});   
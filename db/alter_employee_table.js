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
  var sql = "ALTER TABLE employees  COLUMN employee_fullname VARCHAR(255)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
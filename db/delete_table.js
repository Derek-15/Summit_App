var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cutler7788!",
  database: "summitdb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE employees";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
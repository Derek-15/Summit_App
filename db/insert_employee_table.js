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
  var sql = "INSERT INTO employees (employee_fname, employee_lname, employee_email, employee_phone_number, employee_position, employee_fullname) VALUES ?";
  var values = [
    ['John', 'Elway', 'Elway@gmail.com', '970-606-8822',' Intern', 'John Elway'],




  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
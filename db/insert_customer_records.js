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
  var sql = "INSERT INTO customers (customer_contact_fname, customer_contact_lname, Custumer_buisness_name, customer_email, customer_phone_number, status, address) VALUES ?";
  var values = [
    ['John', 'Smith', 'Hardware co.', 'smith@gmail.com', '970-606-8822', 0, '1204 3rd street Sterling CO'],
    ['John', 'Smith', 'Hardware co.', 'smith@gmail.com', '970-606-8822', 0, '1204 3rd street Sterling CO'],
    ['John', 'Smith', 'Hardware co.', 'smith@gmail.com', '970-606-8822', 0, '1204 3rd street Sterling CO'],


  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
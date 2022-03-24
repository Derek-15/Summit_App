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
  var sql = "CREATE TABLE customers (customer_id INT AUTO_INCREMENT PRIMARY KEY, customer_contact_fname VARCHAR(255),  customer_contact_lname VARCHAR(255), custumer_buisness_name VARCHAR(255), customer_email VARCHAR(255), customer_phone_number VARCHAR(255) ,status BOOLEAN ,address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});   
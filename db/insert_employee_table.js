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
    ['Sam', 'Bradley', 'sb@s-companies.com', '970-622-8822','VP Petroleum Engineering', 'Sam Bradley'],
    ['Allison', 'Pierce', 'sp@s-companies.com', '970-206-8800','Accountant', 'Allison Pierce'],
    ['Brandon', 'Stanley', 'bs@s-companies.com', '970-306-8323','Drilling Engineer', 'Brandon Stanley'],
    ['Kyle', 'Kirk', 'kk@s-companies.com', '970-716-8360', 'Production Engineer', 'Kyle Kirk'],
    ['Paul', 'Smith', 'ps@s-companies.com', '970-656-9822','Reservoir Engineer', 'Paul Smith'],
    ['Stephen', 'Miller', 'sm@s-companies.com', '970-616-3821','Facilities Engineer', 'Stephen Miller'],
    ['Ben', 'Pittsley', 'bp@s-companies.com', '970-826-9922','Contact CFO', 'Ben Pittsley'],
    ['Sarah', 'Moore', 'smo@s-companies.com', '970-412-1122','Geologist', 'Sarah Moore'],
    ['Jay', 'Sinclar', 'js@s-companies.com', '970-392-1222','Controller', 'Jay Sinclar'],
    ['Charlie', 'Ings', 'ci@s-companies.com', '970-290-9132','Surface Landman', 'Charlie Ings'],
    ['Ed', 'Dougs', 'ed@s-companies.com', '970-710-1222','Surface Landman', 'Ed Dougs'],




  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
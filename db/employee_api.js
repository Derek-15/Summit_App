var mysql = require('mysql2');
const Joi = require('joi')
const express = require('express');
const Address = require('ipaddr.js');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  
  con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to the database!");
  });
  res.send('Connected to the database!');

});
//get all customers
app.get('/api/employees/getcust', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM customers", function(err, result, fields){
      if(err) throw err
      else {
        console.log(result);
        res.send(result);
      }

    });
  });
});
//get customers based on by status
app.get('/api/employees/getcuststatus/:status', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM customers WHERE status = " + (req.params.status), function(err, result, fields){
      if(err) throw err
      else {
        console.log(result);
        res.send(result);
      }

    });
  });
});
//get customer based on id
app.get('/api/employees/getcustid/:customer_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM customers WHERE customer_id = " + parseInt(req.params.customer_id), function(err, result, fields){
      if(err) throw err
      else {
        console.log(result);
        res.send(result);
      }

    });
  });
});
;

//post customer
app.post('/api/employees/create-cust', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    let fname = req.body.customer_contact_fname;
    let lname = req.body.customer_contact_lname;
    let bname = req.body.custumer_business_name;
    let cemail = req.body.customer_email;
    let cphone = req.body.customer_phone_number;
    let cstatus = req.body.status;
    let caddress = req.body.address;
    let cdescription = req.body.description;

    if(err) throw err;
    let sql = "INSERT INTO customers (customer_contact_fname, customer_contact_lname, custumer_business_name, customer_email, customer_phone_number, status, address, description) VALUES('" + fname + "', '" + lname 
    +"','"+ bname+"','"+cemail+"','"+cphone+"','"+cstatus+"','"+caddress+"','"+cdescription+"')" ;
    con.query(sql, function (err, result){
      if (err) throw err
      else{
        res.send(result);
        console.log(result);
      }
    });
  });
});
//put customer
app.put('/api/employess/editcust/:customer_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    let fname = req.body.customer_contact_fname;
    let lname = req.body.customer_contact_lname;
    let bname = req.body.custumer_business_name;
    let cemail = req.body.customer_email;
    let cphone = req.body.customer_phone_number;
    let status = req.body.status;
    let address = req.body.address;
    let description = req.body.description;

    if(err) throw err;
    let sql = "UPDATE customers SET  customer_contact_fname = '"+ fname +"', customer_contact_lname  = '"+ lname +"', custumer_business_name = '"+ bname +"', customer_email= '"+cemail +"', customer_phone_number = '"+ cphone +"', status = '"+status +"', address = '"+address+"', description ='"+description+"'  WHERE customer_id = " + parseInt(req.params.customer_id);
    //con.query("Update customer SET name = ? AND SET address ? WHERE id = " + parseInt(req.params.id), function (err, result){
    con.query(sql, function (err, result){
      if (err) throw err
      else{
        console.log(result);
        if(result == "") return res.status(404).send("Nu cusotmer with that id was found");
          res.send(result);
      }
  
    });

  });
});



//delete customer
app.delete('/api/employees/delete-cust/:customer_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    if(err) throw err;
    con.query("DELETE FROM customers WHERE customer_id = " + parseInt(req.params.customer_id), function (err, result){
      if (err) throw err;
      else{
        console.log(result)
        console.log("Number of records deleted: " + result.affectedRows);
        if(result == "") return res.status(404).send("No customer with that id was found");
          res.send(result);
      }
    });
  });
});

//get all employees
app.get('/api/employees/getemployees', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM employees", function(err, result, fields){
      if(err) throw err
      else {
        console.log(result);
        res.send(result);
      }

    });
  });
});
//get employee based on id
app.get('/api/employees/getemployees/:employee_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM employees WHERE employee_id = " + parseInt(req.params.employee_id), function(err, result, fields){
      if(err) throw err
      else {
        console.log(result);
        res.send(result);
      }

    });
  });
});


app.post('/api/employees/create-emp', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    let fname = req.body.employee_fname;
    let lname = req.body.employee_lname;
    let eemail = req.body.employee_email;
    let ephone = req.body.employee_phone_number;
    let epositon = req.body.employee_position;
    let efname = req.body.employee_fullname;
   

    if(err) throw err;
    let sql = "INSERT INTO employees (employee_fname, employee_lname, employee_email, employee_phone_number, employee_position, employee_fullname) VALUES('" + fname + "', '" + lname 
    +"','"+ eemail +"','"+ ephone +"','"+ epositon +"','"+ efname+"')" ;
    con.query(sql, function (err, result){
      if (err) throw err
      else{
        res.send(result);
        console.log(result);

      }  
    });
  });
});

//put
//put customer
app.put('/api/employess/editemp/:employee_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    let efname = req.body.employee_fname;
    let elname = req.body.employee_lname;
    let eemail = req.body.employee_email;
    let ephone = req.body.employee_phone_number;
    let efullname = req.body.employee_fullname;
    if(err) throw err;
    let sql = "UPDATE employees SET  employee_fname = '"+ efname +"', employee_lname  = '"+ elname +"', employee_email = '"+ eemail +"', employee_phone_number= '"+ephone +"', employee_fullname = '"+ efullname +"' WHERE employee_id = " + parseInt(req.params.employee_id);
    //con.query("Update customer SET name = ? AND SET address ? WHERE id = " + parseInt(req.params.id), function (err, result){
    con.query(sql, function (err, result){
      if (err) throw err
      else{
        console.log(result);
        if(result == "") return res.status(404).send("No employee with that id was found");
          res.send(result);
      }
  
    });

  });
});

//delete
//delete customer
app.delete('/api/employees/delete-emp/:employee_id', (req,res)=>{
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cutler7788!",
    database: "summitdb"
  });
  con.connect(function(err){
    if(err) throw err;
    con.query("DELETE FROM employees WHERE employee_id = " + parseInt(req.params.employee_id), function (err, result){
      if (err) throw err;
      else{
        console.log(result)

      
        console.log("Number of records deleted: " + result.affectedRows);
        if(result == "") return res.status(404).send("No employee with that id was found");
          res.send(result);
      }
    });
  });
});


// "employee_fname": "Derek",
// "employee_lname": "McCormick",
// "employee_email": "McCormick@gmail.com",
// "employee_phone_number": "970-606-8822",
// "employee_position": "Engineer",
// "employee_fullname": "Derek McCormick"
// "customer_contact_fname": "Cassie",
// "customer_contact_lname": "Bradley",
// "custumer_business_name": "Summit co.",
// "customer_email": "bradley@gmail.com",
// "customer_phone_number": "970-606-8822",
// "status": 1,
// "address": "1204 3rd street Sidney NE",
// "description": "Empty land"


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));












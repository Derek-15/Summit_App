var mysql = require('mysql2');
const Joi = require('joi')
const express = require('express');
const Address = require('ipaddr.js');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
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

//just experimental will not go to front end
app.get('/api/customers', (req,res)=>{
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


  //inserts single customer
app.post('/api/create-sub', (req,res)=>{
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


// gets all employees 
  app.get('/api/employees', (req,res)=>{
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



// //selects employee based off id
  app.get('/api/employees/id/:employee_id', (req,res)=>{
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


  //gets employees based on position
  //injection risk
  // //directly user input to make a query
  app.get('/api/employees/position/:employee_position', (req,res)=>{
    let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Cutler7788!",
      database: "summitdb"
    });
    con.connect(function(err) {
      if(err) throw err;
      con.query("SELECT * FROM employees WHERE employee_position LIKE '%" + (req.params.employee_position) + "%'", function(err, result, fields){
        if(err) throw err
        else {
          console.log(result);
          res.send(result);
        }
  
      });
    });
  });


  app.get('/api/employees/:employee_position/:employee_fullname', (req,res)=>{
    let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Cutler7788!",
      database: "summitdb"
    });
    con.connect(function(err) {
      if(err) throw err;
      con.query("SELECT * FROM employees WHERE employee_position LIKE '%" + (req.params.employee_position) +
       "%' OR employee_fullname LIKE '%" + (req.params.employee_fullname) + "%'", function(err, result, fields){
        if(err) throw err
        else {
          console.log(result);
          res.send(result);
        }
  
      });
    });
  });

  app.get('/api/employees/name/:employee_fullname', (req,res)=>{
    let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Cutler7788!",
      database: "summitdb"
    });
    con.connect(function(err) {
      if(err) throw err;
      con.query("SELECT * FROM employees WHERE employee_fullname LIKE '%" + (req.params.employee_fullname) + "%'", function(err, result, fields){
        if(err) throw err
        else {
          console.log(result);
          res.send(result);
        }
  
      });
    });
  });






  


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
async function GetEmployee(){
    //api string to get employees based off position
    var pos = "http://localhost:3000/api/employees/position/";
    //api string to get employees based off name
    var name = "http://localhost:3000/api/employees/name/";
    //api string to get all employees
    var all = "http://localhost:3000/api/employees/getemployees";
    //api string to get employees based on position and name
    var both = "http://localhost:3000/api/employees/";
    //var input 
    var inputPosition = document.getElementById("inputselection").value;
    var inputName = document.getElementById("empname").value;
    
    
    //checks what input there is and creates the api string based on the input values
    var apiString;
    if(inputPosition == "" && inputName == ""){
        apiString = all;
    } else if( inputPosition != "" && inputName != ""){
        apiString = both;
        apiString = apiString + inputPosition + "/" + inputName;
    } else if( inputPosition != "" && inputName == ""){
        apiString = pos;
        apiString = apiString + inputPosition;
    } else if( inputPosition == "" && inputName != ""){
        apiString = name;
        apiString = apiString + inputName;
    }
    

    
    alert(apiString);
       // apiString = apiString + inputPosition;
        var response = await fetch(apiString);
    
        //create JSON object
        var  jsonData = await response.json();

        //length of api return
        var len = jsonData.length;
        var empTable = document.getElementById("empt");
        document.getElementById("empt").style.display = ''

        //fills in chart
       for(let i = 0; i <= len -1; i++){
            empTable.insertRow(i+1);
            var fname = empTable.rows[i+1].insertCell(0);
            fname.setAttribute("id", "fname"+ i);
            document.getElementById("fname" + i).innerHTML = (jsonData[i].employee_fname);

            var lname = empTable.rows[i+1].insertCell(1);
            lname.setAttribute("id", "lname"+ i);
            document.getElementById("lname" + i).innerHTML = (jsonData[i].employee_lname);

            var email = empTable.rows[i+1].insertCell(2);
            email.setAttribute("id", "email"+ i);
            document.getElementById("email" + i).innerHTML = (jsonData[i].employee_email);

            var phonenumber = empTable.rows[i+1].insertCell(3);
            phonenumber.setAttribute("id", "phonenumber"+ i);
            document.getElementById("phonenumber" + i).innerHTML = (jsonData[i].employee_phone_number);

            var position = empTable.rows[i+1].insertCell(4);
            position.setAttribute("id", "position"+ i);
            document.getElementById("position" + i).innerHTML = (jsonData[i].employee_position);


        }
        console.log(len);
        console.log(jsonData);

    return true;
}
async function GetCustomer(){

    //apistring to get all customers
    var all = "http://localhost:3000/api/employees/getcust";

    //apistring to get customers with certain status
    var status = "http://localhost:3000/api/employees/getcuststatus/";

    //apistring to get customers with lastname
    var name = "http://localhost:3000/api/employees/getcustname/"


    //apistring to get customers with lastname and status
    var both = "http://localhost:3000/api/employees/getcust/"

    //var input
    var inputPosition = document.getElementById("inputselection").value;
    var inputName = document.getElementById("custname").value;
    var apiString;
    if(inputPosition == "" && inputName == ""){
        apiString = all;
    } else if( inputPosition != "" && inputName != ""){
        apiString = both;
        apiString = apiString + inputPosition + "/" + inputName;
    } else if( inputPosition != "" && inputName == ""){
        apiString = status;
        apiString = apiString + inputPosition;
    } else if( inputPosition == "" && inputName != ""){
        apiString = name;
        apiString = apiString + inputName;
    }
    alert(apiString);
    // apiString = apiString + inputPosition;
     var response = await fetch(apiString);
 
     //create JSON object
     var  jsonData = await response.json();

     //length of api return
     var len = jsonData.length;
     var custTable = document.getElementById("custtable");
     document.getElementById("custtable").style.display = '' ;

     //fills in chart
    for(let i = 0; i <= len -1; i++){
         custTable.insertRow(i+1);
         var fname = custTable.rows[i+1].insertCell(0);
         fname.setAttribute("id", "fname"+ i);
         document.getElementById("fname" + i).innerHTML = (jsonData[i].customer_contact_fname);

         var lname = custTable.rows[i+1].insertCell(1);
         lname.setAttribute("id", "lname"+ i);
         document.getElementById("lname" + i).innerHTML = (jsonData[i].customer_contact_lname);

         var bname = custTable.rows[i+1].insertCell(2);
         bname.setAttribute("id", "bname"+ i);
         document.getElementById("bname" + i).innerHTML = (jsonData[i].custumer_business_name);

         var email = custTable.rows[i+1].insertCell(3);
         email.setAttribute("id", "email"+ i);
         document.getElementById("email" + i).innerHTML = (jsonData[i].customer_email);

         var phonenumber = custTable.rows[i+1].insertCell(4);
         phonenumber.setAttribute("id", "phonenumber"+ i);
         document.getElementById("phonenumber" + i).innerHTML = (jsonData[i].customer_phone_number);

         var cstatus = custTable.rows[i+1].insertCell(5);
         cstatus.setAttribute("id", "status"+ i);
         document.getElementById("status" + i).innerHTML = (jsonData[i].status);

         var caddress = custTable.rows[i+1].insertCell(6);
         caddress.setAttribute("id", "address"+ i);
         document.getElementById("address" + i).innerHTML = (jsonData[i].address);

         var cdescription = custTable.rows[i+1].insertCell(7);
         cdescription.setAttribute("id", "description"+ i);
         document.getElementById("description" + i).innerHTML = (jsonData[i].description);


     }
     console.log(len);
     console.log(jsonData);

 return true;


}

async function loadCustomers(){
    var apiString = "http://localhost:3000/api/employees/getcust";
    var custInput = document.getElementById("custdrop");
    alert(apiString);
     var response = await fetch(apiString);
 
     //create JSON object
     var  jsonData = await response.json();
    
     //length of api return      
     var len = jsonData.length;
     for(let i = 0; i <= len -1; i++){
         var customer = new Option(jsonData[i].customer_contact_fname + " " + jsonData[i].customer_contact_lname,jsonData[i].customer_id)
         custInput.add(customer);
     }

    //  var selectedCustomer = document.getElementById("custdrop").value;

     console.log(selectedCustomer);


    //  document.getElementById("fname").value = "";
    //  document.getElementById("lname").value = "";
    //  document.getElementById("bname").value = "";
    //  document.getElementById("email").value= "";
    //  document.getElementById("phonenumber").value = "";
    //  document.getElementById("address").value = "";
    //  document.getElementById("description").value = "";

    //  return selectedCustomer;
}

async function selectedCustomer(){
    var selectedCustomer = document.getElementById("custdrop").value;

    var apiString = "http://localhost:3000/api/employees/getcustid/";

    apiString = apiString + selectedCustomer;

    alert(apiString);

    var response = await fetch(apiString);
 
    //create JSON object
    var  jsonData = await response.json();

    //fills text box's with selected data
    document.getElementById("fname").value = (jsonData[0].customer_contact_fname);
    document.getElementById("lname").value = (jsonData[0].customer_contact_lname);
    document.getElementById("bname").value = (jsonData[0].custumer_business_name);
    document.getElementById("email").value = (jsonData[0].customer_email);
    document.getElementById("phonenumber").value = (jsonData[0].customer_phone_number);
    document.getElementById("status").value = (jsonData[0].status);
    document.getElementById("address").value = (jsonData[0].address);
    document.getElementById("description").value = (jsonData[0].description);

}

async function editCustomer(){
    var selectedCustomer = document.getElementById("custdrop").value;
    if(selectedCustomer != ""){
        var apiString = "http://localhost:3000/api/employess/editcust/";
    

        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var buisnessName = document.getElementById("bname").value;
        var custemail = document.getElementById("email").value;
        var custphonenumber = document.getElementById("phonenumber").value;
        var custstatus = document.getElementById("status").value;
        var custaddress = document.getElementById("address").value;
        var custdescription = document.getElementById("description").value;
    
        //creates xhr object
        let xhr = new XMLHttpRequest();
     
        apiString = apiString + selectedCustomer;
    
        //create connection
        xhr.open("PUT", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "customer_contact_fname": firstName, "customer_contact_lname": lastName, "custumer_business_name": buisnessName,
        "customer_email": custemail, "customer_phone_number": custphonenumber, "status": custstatus,
        "address": custaddress,"description": custdescription});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("bname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("status").value = "";
        document.getElementById("address").value = "";
        document.getElementById("description").value = "";

        //reloads page
        location.reload();
    } else {

        var apiString = "http://localhost:3000/api/employees/create-cust";
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var buisnessName = document.getElementById("bname").value;
        var custemail = document.getElementById("email").value;
        var custphonenumber = document.getElementById("phonenumber").value;
        var custstatus = document.getElementById("status").value;
        var custaddress = document.getElementById("address").value;
        var custdescription = document.getElementById("description").value;
    
        //creates xhr object
        let xhr = new XMLHttpRequest();
    
        //create connection
        xhr.open("POST", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "customer_contact_fname": firstName, "customer_contact_lname": lastName, "custumer_business_name": buisnessName,
        "customer_email": custemail, "customer_phone_number": custphonenumber, "status":custstatus,
        "address": custaddress,"description": custdescription});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("bname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("status").value = "";
        document.getElementById("address").value = "";
        document.getElementById("description").value = "";

        //reloads page
        location.reload();

    }

}

async function deleteCustomer(){
    var selectedCustomer = document.getElementById("custdrop").value;



    var apiString = "http://localhost:3000/api/employees/delete-cust/";

    apiString = apiString + selectedCustomer;
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var buisnessName = document.getElementById("bname").value;
        var custemail = document.getElementById("email").value;
        var custphonenumber = document.getElementById("phonenumber").value;
        var custstatus = document.getElementById("status").value;
        var custaddress = document.getElementById("address").value;
        var custdescription = document.getElementById("description").value;
    
        //creates xhr object
        let xhr = new XMLHttpRequest();
    
        //create connection
        xhr.open("DELETE", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "customer_contact_fname": firstName, "customer_contact_lname": lastName, "custumer_business_name": buisnessName,
        "customer_email": custemail, "customer_phone_number": custphonenumber, "status":custstatus,
        "address": custaddress,"description": custdescription});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("bname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("status").value = "";
        document.getElementById("address").value = "";
        document.getElementById("description").value = "";

        //reloads page
        location.reload();

}
async function loadEmployees(){
    var apiString = "http://localhost:3000/api/employees/getemployees";
    var empInput = document.getElementById("empdrop");
    alert(apiString);
     var response = await fetch(apiString);
 
     //create JSON object
     var  jsonData = await response.json();
    
     //length of api return      
     var len = jsonData.length;
     for(let i = 0; i <= len -1; i++){
         var employee = new Option(jsonData[i].employee_fname + " " + jsonData[i].employee_lname,jsonData[i].employee_id)
         empInput.add(employee);
     }

}
async function selectedEmployees(){
    var selectedEmployee = document.getElementById("empdrop").value;

    var apiString = "http://localhost:3000/api/employees/getemployees/";

    apiString = apiString + selectedEmployee;

    alert(apiString);

    var response = await fetch(apiString);
 
    //create JSON object
    var  jsonData = await response.json();

    //fills text box's with selected data
    document.getElementById("fname").value = (jsonData[0].employee_fname);
    document.getElementById("lname").value = (jsonData[0].employee_lname);
    document.getElementById("email").value = (jsonData[0].employee_email);
    document.getElementById("phonenumber").value = (jsonData[0].employee_phone_number);
    document.getElementById("position").value = (jsonData[0].employee_position);

}

async function sentEmployee(){
    var selectedEmployee = document.getElementById("empdrop").value;
    if(selectedEmployee != ""){
        var apiString = "http://localhost:3000/api/employess/editemp/";
    

        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var empemail = document.getElementById("email").value;
        var empphonenumber = document.getElementById("phonenumber").value;
        var empposition = document.getElementById("position").value;
    
        //creates xhr object
        let xhr = new XMLHttpRequest();
     
        apiString = apiString + selectedEmployee;
    
        //create connection
        xhr.open("PUT", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "employee_fname": firstName, "employee_lname": lastName, "employee_email": empemail,
        "employee_phone_number": empphonenumber, "employee_position": empposition, "employee_fullname": firstName + " "+ lastName});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("position").value = "";


        //reloads page
        location.reload();
    } else {

        var apiString = "http://localhost:3000/api/employees/create-emp";
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var empemail = document.getElementById("email").value;
        var empphonenumber = document.getElementById("phonenumber").value;
        var empposition = document.getElementById("position").value;

    
        //creates xhr object
        let xhr = new XMLHttpRequest();
    
        //create connection
        xhr.open("POST", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "employee_fname": firstName, "employee_lname": lastName, "employee_email": empemail,
        "employee_phone_number": empphonenumber, "employee_position": empposition, "employee_fullname": firstName+ " " +lastName});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("position").value = "";


        //reloads page
        location.reload();

    }

}

async function deleteEmployee(){
    var selectedEmployee = document.getElementById("empdrop").value;
    var apiString = "http://localhost:3000/api/employees/delete-emp/";

    apiString = apiString + selectedEmployee;
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var empemail = document.getElementById("email").value;
        var empphonenumber = document.getElementById("phonenumber").value;
        var empposition = document.getElementById("position").value;
    
        //creates xhr object
        let xhr = new XMLHttpRequest();
    
        //create connection
        xhr.open("DELETE", apiString, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        //call back statechange
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                alert("Your Submission Has Been Recieved!");
    
            }
        };
        var data = JSON.stringify({ "employee_fname": firstName, "employee_lname": lastName, "employee_email": empemail,
        "employee_phone_number": empphonenumber, "employee_position": empposition, "employee_fullname":firstName + " " +lastName});
        xhr.send(data);
        console.log(data);
        //clear html
    
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("position").value = "";


        //reloads page
        location.reload();

}


    


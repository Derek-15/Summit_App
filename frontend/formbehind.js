const { json } = require("express/lib/response");

async function GetEmployee(){



    //api string to get employees based off position
    var pos = "http://localhost:8000/api/employees/position/";
    //api string to get employees based off name
    var name = "http://localhost:8000/api/employees/name/";
    //api string to get all employees
    var all = "http://localhost:8000/api/employees";
    //api string to get employees based on position and name
    var both = "http://localhost:8000/api/employees/";
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

async function sentCustomer(){
    var apiString = "http://localhost:8000/api/create-sub";

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var buisnessName = document.getElementById("bname").value;
    var custemail = document.getElementById("email").value;
    var custphonenumber = document.getElementById("phonenumber").value;
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
    "customer_email": custemail, "customer_phone_number": custphonenumber, "status":0,
    "address": custaddress,"description": custdescription});
    xhr.send(data);
    console.log(data);
    //clear html

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("bname").value = "";
    document.getElementById("email").value= "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("description").value = "";
}



async function getCustomer(){
    //api
    var apiString = "http://localhost:3000/api/customers";
    //var input 
    //apistring
    
    
    //fetch api
    var response = await fetch(apiString);
    alert(apiString);

    
    //create JSON object
    var jsonData = await response.json();
    




    //fill <p>
    document.getElementById("test").innerHTML = responseText;
    //document.getElementById("dssText").innerHTML = JSON.stringify(jsonData);

  

}
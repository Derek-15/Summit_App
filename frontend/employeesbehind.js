async function getCustomer(){
    var apiString = "http://localhost:8000/api/customers";
    alert(apiString);
    var response = await fetch(apiString);

    alert(apiString);
    var jsonData = await response.json();

    document.getElementById("test").innerHTML = jsonData;
    //document.getElementById("dssText").innerHTML = JSON.stringify(jsonData);
    console.log(jsonData);




}
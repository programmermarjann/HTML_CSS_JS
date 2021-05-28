<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet"  href="Test-1.css">
        <title>My Cars</title>
            <body>
                <h1>My Cars</h1>
                <button id="load"onclick="loadMyCars()">Load my cars</button>
                <button id="ascending"hidden onclick="sortAsc()">Sort ascending</button>
                <button id="descending"hidden onclick="sortDesc()">Sort descending</button>
                <ul id="myCars">
                  <!-- <li>Volvo 244 GLT</li>                  
                   <li>Saab 900 Turbo</li>
                   <li>Volvo 245 GL</li>  -->
                    
                </ul>
                
            </body>
        
    </head>
</html>

<script>
var cars = [{
    brand:"Renault",
    model:"Scenic"
},

{
    brand:"Mazda",
    model:"6"
},

{
    brand:"Ford",
    model:"Focus TDI"
},

{
    brand:"Fiat",
    model:"Stillo TD"
}];

function loadMyCars(){
var result = "";
for(var i = 0; i<cars.length;i++){
    result += "<li>" + cars[i].brand +  " " + cars[i].model + "</li>";
}
document.getElementById("myCars").innerHTML = result;
document.getElementById("ascending").hidden = false;
document.getElementById("descending").hidden = false;
document.getElementById("load").hidden = true;
}

function sortAsc(){
    cars.sort((a,b) => (a.brand > b.brand ? 1: -1))
    loadMyCars();
}

function sortDesc(){
    cars.sort((a,b) => (a.brand < b.brand ? 1: -1))
    loadMyCars();
}


</script>

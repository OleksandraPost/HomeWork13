
    var xmlhttp = new XMLHttpRequest();
var url = "http://www.w3schools.com/website/customers_mysql.php";

//http://www.neowsapp.com/rest/v1/feed
xmlhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
        showCustomers(this.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();


function showCustomers(response,filter) {
    var data = JSON.parse(response);
   /* 
   var filter;
     filter = function setFilter(){
        var input = document.getElementById("myInput");
         return  input.value.toUpperCase();
        };
     console.log(setFilter);
     var arr = function(data, filter) {
        if (filter == undefined) {
            return data;
        } else {  
        return array.indexOf(filter);
        }
      }*/

      var arr =  data;


    

    var out = "<table> <tr><th>Customer</th><th>City</th><th>Country</th></tr>";
    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].City +
        "</td><td>" +
        arr[i].Country +
        "</td></tr>";
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;

}


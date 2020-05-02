function ShopplingList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4&&this.status==200){
            var list = JSON.parse(this.responseText);
            var Output="";
        document.getElementById("demo").innerHTML == output;
        }
    }
    xhttp.open("GET","ShoppingList.json",true);
    xhttp.send();
}

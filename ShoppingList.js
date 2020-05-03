function ShopplingList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4&&this.status==200){
            var list = JSON.parse(this.responseText);
            // console.log(list);
            var Slist = list.ShoppingList;
            // console.log(Slist);
            // document.getElementById("tabstart").innerHTML="<table><caption><h3>Shopping List</h1></caption>"
            var tabstart = "<table><caption><h3>Shopping List</h1></caption> <tr><th>Sl. No</th><th>Particulars</th><th>Quantity</th><th>Unit Cost</th><th>Department</th><th>Notes</th></tr>"
            var output ="";
            for (var i=0;i<Slist.lenght;i++){
                output += "<tr><td>"+ Slist[i].SlNo +"</td>"+"<td>"+ Slist[i].Particulars +"</td>"+"<td>"+ Slist[i].Quantity +"</td>"+"<td>"+ Slist[i].UnitCost +"</td>"+"<td>"+ Slist[i].Department +"</td>"+"<td>"+ Slist[i].Notes +"</td></tr>";
            }
            document.getElementById("ShopList").innerHTML == tabstart + output + "</table>";
            // document.getElementById("tabend").innerHTML ="</table>"
        }
    }
    xhttp.open("GET","ShoppingList.json",true);
    xhttp.send();
}

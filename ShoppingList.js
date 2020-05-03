function GroceryList(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if (this.readyState == 4&&this.status==200){
            var list = JSON.parse(this.responseText);
            console.log(list);
            var slist = list.ShoppingList;
            console.log(slist);
            // document.getElementById("tabstart").innerHTML="<table><caption><h3>Shopping List</h1></caption>"
            var tabstart = "<caption><h3>Shopping List</h1></caption> <tr><th>Sl. No</th><th>Particulars</th><th>Quantity</th><th>Unit Cost</th><th>Department</th><th>Notes</th></tr>"
            console.log(tabstart);

            for (var i=0;i<slist.length;i++){
                tabstart += "<tr><td>"+ slist[i].SlNo +"</td>"+
                "<td>"+ slist[i].Particulars +"</td>"+
                "<td>"+ slist[i].Quantity +"</td>"+
                "<td>"+ slist[i].UnitCost +"</td>"+
                "<td>"+ slist[i].Department +"</td>"+
                "<td>"+ slist[i].Notes +"</td></tr>";
            }
            document.getElementById("table").innerHTML = tabstart;
            let button = document.getElementById("ShopList");
            button.setAttribute("hidden","true");
        }
    };
    xhttp.open("GET","ShoppingList.json",true);
    xhttp.send();
}

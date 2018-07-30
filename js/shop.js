var fruits=[{
	name:"apple",
	category:"fruits",
    prize:50,
    quantity:0	
},
{
	name:"kiwi",
	category:"fruits",
    prize:20,
    quantity:0	
},
{
	name:"mango",
	category:"fruits",
	prize:30,
    quantity:0	
},
{
	name:"watermelon",
	category:"fruits",
	prize:30,
    quantity:0	
},
{
	name:"banana",
	category:"fruits",
	prize:20,
    quantity:0
},
{
	name:"pomegranate",
	category:"fruits",
	prize:50,
    quantity:0	
},
{
	name:"papaya",
	category:"fruits",
	prize:36,
    quantity:0	
},
{
	name:"orange",
	category:"fruits",
	prize:80,
    quantity:0	
},
{
	name:"avocada",
	category:"fruits",
	prize:135,
    quantity:0	
},
{
	name:"orange",
	category:"fruits",
	prize:34,
    quantity:0	
}];


var vegetables=[{
	name:"beans",
	category:"vegetables",
	prize:20,
    quantity:0	
},
{
	name:"corn",
	category:"vegetables",
	prize:19,
    quantity:0	
},
{
	name:"onion",
	category:"vegetables",
	prize:24,
    quantity:0	
},
{
	name:"potato",
	category:"vegetables",
	prize:28,
    quantity:0	
},
{
	name:"tomato",
	category:"vegetables",
	prize:10,
    quantity:0	
},
{
	name:"cauliflower",
	category:"vegetables",
	prize:19,
    quantity:0	
},
{
	name:"capsicum",
	category:"vegetables",
	prize:100,
    quantity:0	
},
{
	name:"carror",
	category:"vegetables",
	prize:80,
    quantity:0	
},
{
	name:"mashrooms",
	category:"vegetables",
	prize:52,
    quantity:0	
},
{
	name:"cucumber",
	category:"vegetables",
	prize:24,
    quantity:0	
}];

var grocery=[{
	name:"soyabin oil",
	category:"grocery",
	prize:99,
    quantity:0	
},
{
	name:"rice",
	category:"grocery",
	prize:44,
    quantity:0	
},
{
	name:"salt",
	category:"grocery",
	prize:18,
    quantity:0	
},
{
	name:"Turmeric",
	category:"grocery",
	prize:38,
    quantity:0	
},
{
	name:"ghee",
	category:"grocery",
	prize:349,
    quantity:0	
},
{
	name:"Wheat",
	category:"grocery",
	prize:256,
    quantity:0	
},
{
	name:"salt",
	category:"grocery",
	prize:46,
    quantity:0	
},
{
	name:"red chilli powder",
	category:"grocery",
	prize:22,
    quantity:0	
},
{
	name:"Asoefetida",
	category:"grocery",
	prize:56,
    quantity:0	
},
{
	name:"garlic",
	category:"grocery",
	prize:49,
    quantity:0
}];


var dairy=[{
	name:"milk",
	category:"dairy",
	prize:35,
    quantity:0
},
{
	name:"cream",
	category:"dairy",
	prize:59,
    quantity:0
},
{
	name:"chaas",
	category:"dairy",
	prize:5,
    quantity:0
},
{
	name:"buttermilk",
	category:"dairy",
	prize:10,
    quantity:0
},
{
	name:"dessert",
	category:"dairy",
	prize:34,
    quantity:0
},
{
	name:"icecream",
	category:"dairy",
	prize:56,
    quantity:0
},
{
	name:"yoghurt",
	category:"dairy",
	prize:58,
    quantity:0
},
{
	name:"milk",
	category:"dairy",
	prize:38,
    quantity:0
},
{
	name:"cheese",
	category:"dairy",
	prize:71,
    quantity:0
},
{
	name:"ghee",
	category:"dairy",
	prize:47,
    quantity:0
}];
row1 ="";
rowNo=1;
function search()
{
	document.getElementById("myTable").style.visibility="visible";//concept from Stackoverflow.
	row1 =row1+"<tr><th>Name</th><th>Category</th><th>Prize</th><th>Quantity</th></tr>";
    var search=document.getElementById("iField").value;
    var regex=new RegExp(search,"g");
    fruits.forEach((fruit)=>{
        if(fruit.name.toLowerCase().match(regex))
            printRows(fruit);
    });
    vegetables.forEach((veg)=>{
        if(veg.name.toLowerCase().match(regex))
            printRows(veg);
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex))
            printRows(groc);
    });
    dairy.forEach((dair)=>{
        if(dair.name.toLowerCase().match(regex))
            printRows(dair);
    });
    document.getElementById("myTable").innerHTML=row1;

}
function printRows(object)
{
    row1 = row1 + "<tr><td id=name"+rowNo+">" + object.name + "</td><td>" +object.category + "</td><td>" +
                     object.prize + "</td><td><input type='number' id=row"+rowNo+" name='quantity' min='0' max='5'></td></tr>";
    rowNo++;
}
cartRight="<th>Name</th><th>Quantity</th>";
i=1;
function addToCart()
{   
    for(;i<rowNo;i++){
        var qnt=document.getElementById("row"+i).value;
        if(qnt>0){
           var itemName= document.getElementById("name"+i).innerHTML;
		   cartRight=cartRight+"<tr><td>"+itemName+"</td><td>"+qnt+"</td></tr>";
        }
    }   
    document.getElementById("rightCart").innerHTML=cartRight;
}
function clearTable(id){
    var tableRef = document.getElementById(id);
	 if(tableRef) tableRef.parentNode.removeChild(tableRef); //from stackoverflow
}

function checkOut(){
	clearTable('myTable');   //concept from stackoverflow
	clearTable("addToCart");
	document.getElementById("bTable").style.visibility="visible"; //concept from Stackoverflow.
	var itemNo=1;
    var tableLength = document.getElementById('rightCart').rows.length;

      while ( itemNo < tableLength )
      {
		var name=localStorage.getItem("name"+itemNo);
		var quantity=localStorage.getItem("quantity"+itemNo);	 
		console.log(name);
		console.log(quantity);
		searchJSON(name,quantity);
        itemNo++;
	 }
	 lastRow="<tr><th>Grand Total</th><td colspan='3'></td><td>"+total+"</td></tr>";   
	 billRow=billRow+lastRow;
	 document.getElementById("bTable").innerHTML=billRow;
	
}
function searchJSON(myName,myQnt){

    var regex=new RegExp(myName,"i");
    fruits.forEach((fruit)=>{
        if(fruit.name.match(regex)){
			fruit.quantity=myQnt;
			printBill(fruit);
            
        }
    });
    vegetables.forEach((veg)=>{
        if(veg.name.toLowerCase().match(regex)){
			veg.quantity=myQnt;
			printBill(veg);
            
        }
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex)){
			groc.quantity=myQnt;
			printBill(groc);
            
        }
    });
    dairy.forEach((dair)=>{
        if(dair.name.toLowerCase().match(regex)){
			dair.quantity=myQnt;
			printBill(dair);
            
        }
	});

}
total=0;
billRow="<tr><th>Name</th><th>Category</th><th>MRP</th><th>Quantity</th><th>Price</th></tr>";
function printBill(foodItem){
	console.log(foodItem);
	var unitTotal=foodItem.prize*foodItem.quantity;
	total=total+unitTotal;
	billRow=billRow+"<tr><td>"+foodItem.name+"</td><td>"+foodItem.category+"</td><td>"+
    foodItem.prize+"</td><td>"+foodItem.quantity+"<td>"+unitTotal+"</td><tr/>";
}

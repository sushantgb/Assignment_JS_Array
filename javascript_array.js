//array declaration
const cars = ["BMW", "Audi", "Scoda", "Benz", "Tata", "Maruti Suzuki", "Mahindra"];
//declaring list literal for list tag
let list ="<ul>";
//looping of the array
for(let car of cars){
    //adding li tag with array elements
    list+= "<li>" + car + "</li>";
}
//adding closing ul tag to close list
list+="</ul>";
//printing the list
document.getElementById("para1").innerHTML=list;
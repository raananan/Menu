/* exported myFunction */
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global document, window, alert, console, require*/

var food = [];
window.onload = function() {document.getElementById("demo").innerHTML = food;}
var sum=0;

function add(name,price) { 
    var btn = document.createElement("button");                
    food.push(name);
    sum+=price;
    document.getElementById("demo").innerHTML+="<br>";
    document.getElementById('demo').appendChild(btn);
    btn.innerText = 'הסר';
    document.getElementById("demo").innerHTML += name+"  "+price+"<br>";
    document.getElementById("total").innerHTML="סך הכל לתשלום"+"  "+ sum;
    btn.onClick = function(){
      alert("on click handler");
    };
  }


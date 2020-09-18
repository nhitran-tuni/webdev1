document.getElementsByClassName("navi")[0].classList.add("list");

var li = document.createElement("LI");
var a = document.createElement("a");
a.setAttribute('href', 'http://localhost:3000/');
a.innerHTML = "Localhost";
li.appendChild(a);
document.getElementsByClassName("navi list")[0].appendChild(li);

var newList =  document.createElement("LI");
var newTextNode = document.createTextNode("Item 0");
newList.appendChild(newTextNode);
document.getElementById("ordered").insertBefore(newList, document.getElementById("ordered").childNodes[0]);

document.getElementById("todo").classList.remove("navi");

document.getElementById("todo").removeChild(document.getElementById("todo").childNodes[3]);
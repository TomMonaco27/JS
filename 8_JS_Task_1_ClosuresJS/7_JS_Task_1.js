//Для практикума из занятия 7 продумать, где можно применить замыкания.
"use strict";
 
var elems = document.getElementsByClassName("myClass"), i;
 
for (i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function () {
    this.innerHTML = "Товар закончился";
  });
	
}

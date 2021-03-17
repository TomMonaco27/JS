//Для практикума из занятия 7 продумать, где можно применить замыкания. Например, если товар закончился, при нажатии на кнопку будем менять её название
"use strict";
 
var elems = document.getElementsByClassName("myClass"), i;
 
for (i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function () {
    this.innerHTML = "Товар закончился";
  });
	
}

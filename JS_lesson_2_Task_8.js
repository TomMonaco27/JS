// JS. Lesson 2 Task 8.
// С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень 



function power(val, pow) {
	if ((val === 0) && (pow === 0)) {
		return 1;
  
	} else if (pow === 0) {
		return 1;

	} else if (pow === 1) {
		return val;
	
	} else if (val === 0){
		return 0;
	
	} else if (val === 1){
		return 1;
	}	
  
	if (pow < 0) {
		return (val * power(1 / val, - pow));
	} else {
		return (val * power(val, pow - 1));
	}
}

alert(power(0, 0));
alert(power(10, 1));
alert(power(10, 0));
alert(power(1, 100));
alert(power(0, 10));
alert(power(2, 3));
alert(power(2, -1));



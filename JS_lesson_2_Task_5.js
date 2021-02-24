// JS. Lesson 2 Task 5. Дан код:

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.


function addition(a, b) {
	var result = a + b;
	return result;
}

function subtraction(a, b) {
	var result = a - b;
	return result;
}

function multiplication(a, b) {
	var result = a * b;
	return result;
}

function division(a, b) {
	if (b === 0) {
		alert("Division by zero!");
		return 0;						// Деление на ноль равно бесконечности, сделаем в программе условно, что результат при делении у нас будет показывать ноль.
	}
	var result = a / b;
	return result;
} 

alert(addition(10, 12))
alert(subtraction(10, 12))
alert(multiplication(10, 12))
alert(division(10, 12))
alert(division(10, 0))
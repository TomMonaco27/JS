// JS. Lesson 2 Task 6. Дан код:
/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function addition(arg1, arg2) {
	return arg1 + arg2;
}

function subtraction(arg1, arg2) {
	return arg1 - arg2;
}

function multiplication(arg1, arg2) {
	return arg1 * arg2;
}

function division(arg1, arg2) {
	if (arg2 === 0) {
		alert("Division by zero!");
		return 0;						// Деление на ноль равно бесконечности, сделаем в программе условно, что результат при делении у нас будет показывать ноль.
	}
	return arg1 / arg2;
} 

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "addition":
      console.log(addition(arg1, arg2));
      break;
		case "subtraction":
      console.log(subtraction(arg1, arg2));
      break;
		case "multiplication":
      console.log(multiplication(arg1, arg2));
      break;
		case "division":
      console.log(division(arg1, arg2));
      break;
	}
}

mathOperation(10, 12, "addition");
mathOperation(10, 12, "subtraction");
mathOperation(10, 12, "multiplication");
mathOperation(10, 12, "division");
mathOperation(10, 0, "division");
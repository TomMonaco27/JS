// JS. Lesson 2 Task 3. Дан код:

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
 Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/	
	var a = -10;
	var b = -5;
	var result = 0;

	if ((a >= 0) && (b >= 0)) {
	  result = a - b;
	  console.log("Результат ", a, " - ", b, " = ", result);
	  
	} else if ((a < 0) && (b < 0)) { 
	  result = a * b;
	  console.log("Результат ", a, " * ", b, " = ", result);

	} else {
	  result = a + b;
	  console.log("Результат ", a, " + ", b, " = ", result);
	  
	}
	
// Вариант 2. C использованием функции


	
function func_result(a2, b2) {
	var result2 = 0;
	if ((a2 >= 0) && (b2 >= 0)) {
	  result2 = a2 - b2;
	  return result2;
	  
	} else if ((a2 < 0) && (b2 < 0)) { 
	  result2 = a2 * b2;
	  return result2;

	} else {
	  result2 = a2 + b2;
	  return result2;
  }  
}

alert (func_result(-12, -5));
/* JS_Lesson_4_Task_1 
 Написать функцию, преобразующую число в объект.
 Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
 в котором в соответствующих свойствах описаны единицы, десятки и сотни.
 Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
 Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */
 
 function numberToObject () {
  var object = 
	{
		единицы: 0,
		десятки: 0,
		сотни: 0,
	}
	 numberUser = prompt('Введите число от 0 до 999');
	 if (0 > numberUser || numberUser > 999) {
		 console.log('Число не в диапозоне от 0 до 999!');
		 return object;
	 }
   object["единицы"] = numberUser % 10;
   numberUser = parseInt(numberUser / 10);
   object["десятки"] = numberUser % 10;
   numberUser = parseInt(numberUser / 10);
   object["сотни"] = numberUser % 10;
   
 	 return object;
 }
 
 
 console.log(numberToObject());
 
 //1. Задание 1 урок 4. JS. Выводит десятки, единицы, сотни почему-то?
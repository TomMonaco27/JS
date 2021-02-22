// JS. Lesson 2 Task 3. Дан код:

// Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

function getRandomInt(number) {
  return Math.floor(Math.random() * Math.floor(number));
}

 var randomNumber = getRandomInt(16);
console.log(randomNumber);


function outputNumbers(number) {
	while (number <= 15) {
  console.log(number);
  number++
  }
}

outputNumbers(randomNumber);
outputNumbers(10);



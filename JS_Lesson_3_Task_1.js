// JS_Lesson_3_Task_1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let i = 0;

function isPrime(n) {
    if (n < 2) { 
		return false;
	}

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

while (i < 100) {
	if (isPrime(i)) {
	console.log(i)
  }
i++;

}

// JS_Lesson_3_Task_4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (var i = 0; i < 10; console.log(i++)) {
}

// Вариатн 2. C использованием функции

function isNext(i){
	console.log(i);
	return i < 9
}

for (var i = 0; isNext(i); i++) {
	
}

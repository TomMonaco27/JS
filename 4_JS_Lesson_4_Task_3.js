/* JS_Lesson_4_Task_3 
*На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
 */
 
 // Данные:
  var gameFinish = false;
  var prize = 0;              // сумма выигрыша участника
  var answerUser;
  var round = 0;              // номер раунда
  
  var MILLION = {
		0: 100,
		1: 200,
		2: 300,
		3: 500,
		4: 1000,
		5: 2000,
		6: 4000,
		7: 8000,
		8: 16000,
		9: 32000,
		10: 64000,
		11: 125000,
		12: 250000,
		13: 500000,
		14: 1000000,
	}
  
	var baseQuestion = [
	{question: "Сколько лет земле?",
	 answer1: "4,54 милларда лет",
	 answer2: "5 миллиард лет",
	 answer3: "1 миллиард лет",
	 answer4: "5 миллион лет",
  	 answerRight: "1",
	},
	{question: "Сколько лет вселенной?",
	 answer1: "13,75 милларда лет",
	 answer2: "15,75 миллиарда лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
   	 answerRight: "1"
	},
	{question: "Сколько лет марсу?",
	 answer1: "13,75 милларда лет",
	 answer2: "4,65  миллиарда лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
   	 answerRight: "2"
	},
 	{question: "Сколько лет венере?",
	 answer1: "13,75 милларда лет",
	 answer2: "500 миллионов лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
   	 answerRight: "2"
	},
  	{question: "Сколько лет юпитеру?",
	 answer1: "от 4 до 5 милларда лет",
	 answer2: "500 миллионов лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
    	 answerRight: "1"
	},
 	{question: "Сколько лет сатурну?",
	 answer1: "4,6 милларда лет",
	 answer2: "100 миллионов лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
  	 answerRight: "1"
	},
	{question: "Сколько лет млечному пути?",
	 answer1: "13,2 милларда лет",
	 answer2: "500 миллионов лет",
	 answer3: "1,75 миллиарда лет",
	 answer4: "9,75 миллиарда лет",
   	 answerRight: "1"
	},
	{question: "Сколько лет солнцу?",
	 answer1: "4,5 милларда лет",
	 answer2: "500 миллионов лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "4,75 миллиарда лет",
   	 answerRight: "1"
	},
	{question: "Сколько лет луне?",
	 answer1: "от 4,4 до 4,5 милларда лет",
	 answer2: "500 миллионов лет",
	 answer3: "10,75 миллиарда лет",
	 answer4: "4,75 миллиарда лет",
  	 answerRight: "1"
	},
	{question: "Когда открыты спутники Марса 'Фобос' и 'Деймос' ?",
	 answer1: "1877 год",
	 answer2: "1878 год",
	 answer3: "1879 год",
	 answer4: "1977 год",
  	 answerRight: "1"
	},
	{question: "Минимальное расстояние от Марса до Земли ?",
	 answer1: "55,76 млн. км",
	 answer2: "54,76 млн. км",
	 answer3: "56,76 млн. км",
	 answer4: "58,76 млн. км",
	 answerRight: "1"
	},
	{question: "Максимальное расстояние от Марса до Земли ?",
	 answer1: "401 млн. км",
	 answer2: "402 млн. км",
	 answer3: "403 млн. км",
	 answer4: "404 млн. км",
   	 answerRight: "1"
	},
	{question: "Максимальное расстояние от Венеры до Земли ?",
	 answer1: " 261 млн км",
	 answer2: " 262 млн км",
	 answer3: " 263 млн км",
	 answer4: " 264 млн км",
   	 answerRight: "1"
	},
	{question: "Минимальное расстояние от Венеры до Земли ?",
	 answer1: " 38 млн км",
	 answer2: " 39 млн км",
	 answer3: " 37 млн км",
	 answer4: " 36 млн км",
   	 answerRight: "1"
	},
	{question: "Вы доши до миллиона, правильный ответ 1",
	 answer1: " Миллион",
	 answer2: " Миллион",
	 answer3: " Миллион",
	 answer4: " Миллион",
   	 answerRight: "1"
	},
  ];
	
alert('Приветствуем в игре "Кто хочет стать миллионером"');
alert('Правила игры:\n1. Выводится номер раунда и возможная сумма выигрыша.\n 2. Задаётся вопрос и четыре варианта ответа с цифрами 1,2,3,4\n 3. Если верно, то игра идет дальше.\n 4. Если не верный ответ и не сгораемая сумма, то выход с несгораемой суммой, иначе выигрыш: 0\n 4. Удачи!');
//  Цикл игры:
	while (!gameFinish) {
		for (var i = 0; i < 15;i ++) {
//  игровой раунд 
    		round++;
		if (round === 5 || round === 10) {
			alert('Несгораемая сумма. Если ответите не верно, то ничего не потеряете.');
		}
		alert("Раунд " + round + ".Вы можете выиграть: " + MILLION[i]);
		alert(baseQuestion[i].question + '\n1. ' + baseQuestion[i].answer1 + '\n2. ' + baseQuestion[i].answer2 + '\n3. ' + baseQuestion[i].answer3 + '\n4. ' + baseQuestion[i].answer4);
			answerUser = prompt('Вывеберете вариант ответа: 1, 2, 3, 4. (q - выход)');
// 	досрочный выход из игры	
		 if (answerUser === 'q') {
			gameFinish = true;
			break;
		  }
      
      if (answerUser === baseQuestion[i].answerRight) {
      	prize = MILLION[i];
        alert("Верно! Ваш выигрыш составил: " + prize);   	
	      
      } else {
      		if (round === 5 || round === 10 ) {
         		 alert('Не Верно! Но у вас "Несгораемая сумма". Увы..Верный ответ был: ' + baseQuestion[i].answerRight);
           		 prize = MILLION[i - 1];
           		 gameFinish = true;
           		 break;
         	 } 		
		  prize = 0;
		  alert("Не Верно! Увы..Верный ответ был: " + baseQuestion[i].answerRight);
		  gameFinish = true;
		  break;
      }
			
		}
		gameFinish = true;
	}
	

//  Завершение:
alert('Конец игры. Поздравляю, ваш выигрыш составил: ' + prize);

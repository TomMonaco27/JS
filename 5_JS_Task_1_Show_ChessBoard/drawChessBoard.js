/* Lesson 5 Task 1. 
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*Заменить буквы, обозначающие фигуры, картинками.
*/

function drawChessBoard() {
	let mainBlock = document.querySelector('.main-block');
	let block;
	let flag = true;
	
	for (let i = 0; i < 8; i++){
		for (let j = 0; j < 8; j++){
			if (j == 0) { 
				flag = !flag;
			};
			
			block = document.createElement('div');
			
			if (flag) {
				block.className = 'block black';
			} else {
				block.className = 'block white'
			};
			mainBlock.appendChild(block);
			flag = !flag;
		}
	}
}

Window.onload = drawChessBoard();

/* Lesson 5 Task 1. 
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*Заменить буквы, обозначающие фигуры, картинками.
*/

function drawChessBoard() {
	let chessBlock = document.querySelector('.chess-board');
	let block;
	let flag = true;
	
	chessmet = {
		0: ['-0px -7px', '-450px -7px', '-42px -7px', '-89px -7px', '-135px -7px', '-42px -7px', '-450px -7px', '-0px -7px'],
		1: ['-495px -5px', '-495px -5px', '-495px -5px', '-495px -5px', '-495px -5px', '-495px -5px', '-495px -5px', '-495px -5px'],
		6: ['-495px -420px','-495px -420px','-495px -420px','-495px -420px','-495px -420px','-495px -420px','-495px -420px','-495px -420px'],
		7: ['-0px -420px','-450px -420px', '-42px -420px', '-89px -420px', '-135px -420px', '-42px -420px', '-450px -420px', '-0px -420px'],
	
	};

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

			if (chessmet[i]!==undefined && chessmet[i][j]!==undefined) {
				block.style.backgroundImage = 'url(chess2.png)';
				block.style.backgroundPosition = chessmet[i][j];
			}
			chessBlock.appendChild(block);
			flag = !flag;
		}
	}
}


Window.onload = drawChessBoard();

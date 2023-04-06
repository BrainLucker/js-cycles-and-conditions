'use strict';

// Задача на формирование фигуры

function formPyramid() {
	const lines = 5;
	let result = '';

	for (let i = 0; i <= lines; i++) {
		for (let j = 0; j <= lines + i; j++) {
			let char = (j < lines - i) ? ' ' : '*';
			result += char;
		}
		result += '\n';
	}
	
	return result;
}

console.log(formPyramid());
'use strict';

// Задачи на использование циклов и условий

// Первая задача
function firstTask() {
	for (let i = 5; i <= 10; i++) {
		console.log(i);
	}
}

firstTask();

// Вторая задача
function secondTask() {
	for (let i = 20; i >= 10; i--) {
		if (i === 13) break;
		console.log(i);
	}
}

secondTask();

// Третья задача
function thirdTask() {
	for (let i = 2; i <= 10; i+= 2) {
		console.log(i);
	}
}

thirdTask();

// Четвертая задача
function fourthTask() {
	let i = 2;
	while (i < 16) {
		++i;
		if (i % 2 === 0) {
			continue;
		} else {
			console.log(i);
		}
	}
}

fourthTask();

// Пятая задача
function fifthTask() {
	const arrayOfNumbers = [];
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers[i - 5] = i;
	}
	return arrayOfNumbers;
}

fifthTask();
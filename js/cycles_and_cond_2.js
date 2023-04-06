'use strict';

// Продвинутые задачи на использование циклов и условий

// Первая задача
function firstTask() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}

	return result;
}

firstTask();

// Вторая задача
function secondTask() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	for (let i = 0; i < data.length; i++) {
		if (typeof(data[i]) === 'number') {
			data[i] *= 2;
		} else if (typeof(data[i]) === 'string'){
			data[i] += ' - done';
		}
	}
    
	return data;
}

secondTask();

// Третья задача
function thirdTask() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	for (let i = 0; i < data.length; i++) {
		result[data.length - i - 1] = data[i];
	}

	return result;
}

thirdTask();
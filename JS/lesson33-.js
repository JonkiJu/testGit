// LESSON 33

const arr = [1, 22, 13, 166, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {                                 // Функція для сортування за зростанням
	return a - b;
}

// псевдо масиви не мають методові push pop  і тд

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} всередині масива ${arr}`)			// також один з методів як вивести всі елементи масива, ним це можна зробити більш точно
// });																	// Break i continue тут непрацюють


// arr.map
// arr.every/some
// arr.filter															// Методи трансформації масивів
// arr.reduce 

// arr[99] = 0;
// console.log(arr.length); // виводить довжину масиву а якщо точніте то це осатнній індекс масива +1 якщо в масиві 10 індексів 0,1,2 і тд але останній 99 то виведе 100


// arr.pop();		// Видалає останній елемент з масива
// arr.push(10);	// Добавляє останній елемент з масива   ці методи не дуже часто використовуються


// console.log(arr);

// for (let value of arr) {
// 	console.log(value);
// }
// 											// два варіанти як можна вивести всі елементи масива
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


const str = prompt('', '');
const products = str.split(', ');            // Метод щоб з строки зробити масив
products.sort();                            // сортує
console.log(products.join('; '));
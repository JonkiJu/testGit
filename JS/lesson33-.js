'use strict';

// // LESSON 33

// // const arr = [1, 22, 13, 166, 8];
// const arr = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// // arr.sort(compareNum);
// // console.log(arr);

// // function compareNum(a, b) {                                 // Функція для сортування за зростанням
// // 	return a - b;
// // }



// // псевдо масиви не мають методові push pop  і тд

arr = [1, 2, 3];

arr.forEach(function(item, i, arr) {             // item - елемент масива i - номер в списку масива arr - назва самого масива
	console.log(`${i}: ${item} всередині масива ${arr}`);			// також один з методів як вивести всі елементи масива, ним це можна зробити більш точно
});																	// Break i continue тут непрацюють


// // arr.map
// // arr.every/some
// // arr.filter															// Методи трансформації масивів
// // arr.reduce 

// // arr[99] = 0;
// // console.log(arr.length); // виводить довжину масиву а якщо точніте то це осатнній індекс масива +1 якщо в масиві 10 індексів 0,1,2 і тд але останній 99 то виведе 100


// // arr.pop();		// Видалає останній елемент з масива
// // arr.push(10);	// Добавляє останній елемент з масива   ці методи не дуже часто використовуються

// // console.log(arr);

// // for (let value of arr) {
// // 	console.log(value);
// // }
// // 											// два варіанти як можна вивести всі елементи масива
// // for (let i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }


// const str = prompt('', '');
// const products = str.split(', ');            // Метод щоб з строки зробити масив
// products.sort();                            // сортує
// console.log(products.join('; '));           // робить строку з масива


// // LESSON 35

// let a = 5,
//     b = a;


// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// // const copy = obj; // if we copy object, we only create a link for this object, and if we change copy, we change object.

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);


// function copy (mainObj) {             // Function for copy not deap obj if obj have array they have link and if you chanke array in copy obj, you also change array in main obj
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj [key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(numbers)
// console.log(newNumbers)


// const add = {
//   d: 17,
//   e: 20
// };

// const clone = (Object.assign({}, add));    // another method for copy not deap obj

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();    // slice method for not deap copy array

// newArray[1] = 'asdasd';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...oldArray, ...blogs, 'vk', 'facebook'];      // spred operator 

//       console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const array = ['a', 'b'];

// const newArray = [...array]       //  4 method for not deap copy

// console.log(newArray)




// // LESSON 36

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));


console.dir([1,2,3]);

const soldier = {
	health: 400,
	armor: 100
};

const jonh = Object.create(soldier);  // john prototype sordier

// jonh.__proto__ = soldier;       // OLD, never use

console.log(jonh.armor);

object.setPrototypeOf(john, soldier); // new 


// LESSON 39 Динамічна типізація
// Methods Dynamic typing || transform type 
// 1)

console.log(typeof(String(null)));

// 2)

console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);


const fontSize = 26 + 'px';

// To Number

// 1)

console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'4'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', '');

// To boolen

// 0, null, '', undefined, Nan; ALWAYS FALSE

// 1)
let swithcer = null;

if (swithcer) {
	console.log('working...');
}

swithcer = 1;

if (swithcer) {
	console.log('working...');
}



// 2)
console.log(typeof(Boolean('15')));   // Never used

// 3)
console.log(typeof(!!'123123'));      // Never used


// LESSON 40

function createCounter() {
	let counter = 0;

	// eslint-disable-next-line no-unused-vars
	const myFunction = function() {
		counter = counter + 1;
		return counter;
    
	};
	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();


console.log(c1, c2, c3);


const result = getSum(5, 6);
const getSum = function(a, b) {
	return a + b;
};

getSum(result);

console.log([] + false + null + true);
console.log(2 && 0 && 2); // Always return first FALSE value

console.log( +'infinity');
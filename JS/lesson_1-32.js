/* eslint-disable linebreak-style */
'use strict';

// a = 15;


// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// leftBorderWidth = 10;
// console.log(leftBorderWidth);

// // const obj = {
// // 	a: 50
// // };

// // obj.a = 10;

// console.log (obj);

// var name = "Ivan";


// {
// 	let result = 50;
// }

// console.log(result);



// const numbe = 1;
 
// const word = "petro";

// const bool = true;

// let und;
// console.log(und);

///////////


// const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };
// console.log(obj["name"]);

// let arr = ["plun.png", "orange.jpg", "huyhna.sys",{}, []];
// console.log(arr[1]);




// УРОК 12

// const arr = ["a", "b", "c"];
// // const obj = {a: 1, b: 2};



// const arrObj = {
// 	a: "a",
// 	1: "ba",
// 	2: "c"
// };



// arrObj.1 = 3;
// arrObj.b = "123";

// console.log(arrObj);


// const b = [1,2,3,4];
	



// console.log(b);




// obj = {
// 	"Anna": 500,
// 	"Alice": 800,
	
// };

// console.log(obj["Anna"]);






// let storeName = 'Mono';

// const storeDescription = {
// 	budget: 10000,
//     employees: ["Peter", "Luis", "Vadim"],
//     products: {
//         weed: 400,
//         lsd: 500
//     },
//     open: true
// };


// console.log(storeDescription['products'])


// const storeName = 'My awesome store';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'John', 'Sam'],
//     products: {
//         'soap': 20,
//         'water': 5
//     },
//     open: true
// }


// УРОК 13

// alert('Hello'); 

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам є 18?', '');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Як ваше імя?', '');
// answers[1] = prompt('Як ваше Фамілія?', '');
// answers[2] = prompt('Скільки вам років?', '');

// // document.write(answers);
// console.log(typeof(answers));


// УРОК 14 

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/10/${category}`);

// const user = 'Ivan';
// alert(`привет, ${user}`);



// УРОК 15      ОПЕРАТОРИ

console.log('arr' + '');

let incr = 10,
	decr = 10;   

incr++;         // їх можна писати префіксною формою, тобто спереду ++incr, або постфіксною формою, тобто після самого значення decr--,
decr--;         // але якщо в консоль лог написати постфіксну форму то саме значення виведеться без змін, тому що ++ або -- прорахувався після виведення значення

console.log(incr);
console.log(decr);

console.log(10%2);   // тут перше число ділиться на друге число стільки скільки може, а те що лишилось виводиться в консоль

console.log(2*4 == 8);      // це просто зрівнення == воно покаже чи співпадають два значенння, і тип обєкту не грає різниці
console.log(2*4 === 8);      // це строге зрівнянн === воно покаже чи співпадають два значенння, але тип обєкту також має співпадати


const isChecked = true,
	  isClose = true;
	  isDuo = true;


console.log(isChecked && !isClose);       // це логічний оператор "І" && він показує чи ці два обєкти рівні в вигляді Boolean або ж простими словами true/false
console.log(isChecked || isClose);       // це логічний оператор "АБО" || він показує чи хочаби один з обєктів правдивий
console.log(isChecked || isClose);       // це логічний оператор "ОТРІЦАНІЯ" ! він міняє значення обєкта


console.log(2 + 2 * 2 == 8);      // це просто зрівнення == воно покаже чи співпадають два значенння, і тип обєкту не грає різниці
console.log(2*4 != 8);      // це просто зрівнення НЕ РАВНО != якщо два обєкта не співпадають, то воно покаже TRUE 


// УРОК 16

// GIT 


// 20 УМОВИ

if (4 == 9) {             // якщо 4 = 4 то код який в середині if виконується 
	console.log('OK!');
} else {                  // якщо 4 не = 4 тоді виконується ELSE
	console.log('error');
}


// if (num<49){
//   console.log('error');
// } else if (num>100){
//   console.log('Багато');
// } else {
// 	console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('error');

// const num = 50;


// switch (num) {
// case 49:
// 	console.log('Не правильно');
// 	break;
// case 100:
// 	console.log('Не правильно');
// 	break;
// case 50:
// 	console.log('ПРАВИЛЬНО');
// 	break;
// default:
// 	console.log('Не в цей раз');
// 	break;
// }


// УРОК 21

// є 5 сущновстів які завжди будуть давати FALSE
// 0	пустра строка без пробілав		null	Nan		Undefind

// Оператор і && завжди повертає перше нерпвдиве значення якщо воно є 
// АБО
// Повертає останнє правдиве значення

// Оператор АБО || повертає перше правдиве значення
// АБО 
// Останнє неправдиве значення

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
// 	console.log('Я наївся');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asdasdasdasd');



// if(hamburger === 3 && cola === 1 && fries) {
// 	console.log('Всі наїлись');
// } else {
// 	console.log('Йдемо в інший заклад');
// }



// const hamburger = 3;
// const fries = 0;
// const cola = 0;




// if(hamburger || cola || fries) {
// 	console.log('Всі довольні');
// } else {
// 	console.log('Йдемо в інший заклад');
// }


// let johnReptort, alexReport, samReport, mariaReport = 'done';
// console.log(johnReptort || alexReport || samReport || mariaReport);




// const hamburger = 3;
// const fries = 4;
// const cola = 0;
// const nuggets = 2;



// if(hamburger === 3 && cola === 2 || fries === 2 && nuggets) {
// 	console.log('Всі довольні');
// } else {
// 	console.log('Йдемо в інший заклад');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 4 && nuggets);


// console.log(!0);



// УРОК 22


// let num = 50;

// while (num < 55){
// 	console.log(num);
// 	num++;
// }

// for (num < 50;) {
// 	console.log(num);
// 	num++;
// }


// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);


// for (let i = 1; i < 8; i++) {				// буде спрацьовувати 7 раз, тому що переменноа I має досягти значення меньше 8, тобто 7 
// 	console.log(num);
// 	num++;
// }

// for (let i = 1; i < 10; i++) {				// буде спрацьовувати 7 раз, тому що переменноа I має досягти значення меньше 8, тобто 7 
// 	if (i===6){
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }


// УРОК 23

// for (let i = 0; i<3; i++){
// 	console.log(i);
// 	for (let j = 0; j<3; j++){
// 		console.log(j);
		
// 	}
// }

// // половина ялинки з зірочок
// let result = '';
// const length = 7;

// for (let i =1; i < length; i++) {
	
// 	for (let j =0; j < i; j++) {
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);



first: for (let i = 0; i<3; i++){
	console.log(`First level: ${i}`);
	second: for (let j = 0; j<3; j++){
		console.log(`Second level: ${j}`);
		for (let k = 0; k<3; k++){
			// if (k === 2) continue ;
			console.log(`Third level: ${k}`);
		}
	}
}


// ЗАВДАННЯ 3


for (let i=5; i<=10; i++) {
	console.log(i);
}

for(let i=20; i>=10;i--) {
	console.log(i);
	if (i === 13) break;
}
   
// for(let i=2; i<=10; i++) {
// 	if(i % 2 === 0) 
// 		console.log(i);
// }




// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }



// let i = 2;
// while (i <=16) {
// 	if (i % 2 === 0){
// 		i++;
// 		continue;
// 	}
// 	else{
// 		console.log(i);
// 	}
// 	i++;
// }

// const arr = [];

// for (let i = 5; i <= 10; i++) {
// 	arr[i - 5] = i;
// }
// console.log(arr);




// ЗАВДАННЯ 4
// const arr = [5,6,7,8,9,10];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	result[i]=arr[i];
// }

// console.log(result);


// // const arr = [5,6,7,8,9,10];
// const result = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < result.length; i++) {
// 	if (typeof result[i] === 'number') {
// 		result[i] = result[i] * 2;
// 	} else if (typeof result[i] === 'string') {
// 		result[i] = `${result[i]} - done`;
// 	}
// }

// console.log(result);




// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i=1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - 1]
// }

// console.log(result);


// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// for(let i=20; i>=10;i--) {
// 	console.log(i);
// 	if (i === 13) break;
// }




// ЗАДАЧА 4


// const lines = 6;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)



// УРОК 25 ФУНКЦІЇ 
// let num = 20;

// function showFirstMessage(text) {				// в круглих душках () Аргументи функції
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);							// Якщо функція шукає якусь змінну, то вона спочатку шукає її на локальному рівні тобто в самій функції, а вже потім поза її межами
// }

// showFirstMessage('Hello World');			// Якщо хочеш викликати функцію то треба ось це прописувати
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {										// функція DECLARATION створюється до початку виконання скріпта 
// 	let num=50;



// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

 
// const logger = function() {									// Це є фунуція expression вона створюється лише коли до неї доходить черга
// 	console.log('hello World')
// };

// logger();



// const calc = (a, b) => { return a + b };		// стрелочна функція


// // УРОК 26

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);
// // УРОК 27 

// function test() {
// 	for(let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if(i === 3) return
// 	}
// 	console.log('done');
// }

// test();

// // ЗАДАЧА 6

// const peopleName = 'Антон';

// function sayHello(name) {
// 	return `Привіт ${name}`;
// }

// sayHello('Антон');





// const numberForTask = 5;

// function returnNeighboringNumbers (number) {
// 	return (number - 1, number, number + 1);
// }

// returnNeighboringNumbers(numberForTask);


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//            console.log(str += `${num * i}`) ;
//             // Тут без черточек в конце
//         } else {
//            console.log(str += `${num * i}---`) ;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(5, 3);



// function getMathResult (num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			(str += `${num * i}`)
// 		}
// 		else {
// 			(str += `${num * i}---`)
// 		}
// 	}
// 	console.log(str);
// 	return str;
// }

// getMathResult(10, 3);








// function sayHello (name) {
// 	return (`Привіт ${name}`);
// }

// sayHello(Andriy);


// const number = 5;

// function returnNeighboringNumbers (num) {
// 	for (let i = 1, i > num )
// }



// УРОК 28
const str = 'test';

console.log(str.length) // виводить кілкість символів

const str = 'test';

console.log(str[2]);


console.log(str.toUpperCase());
console.log(str.toLowerCase());



console.log(str);





const fruit = 'some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'hello world';

// console.log(logg.slice(6))

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num))

const test = '12.2px';
console.log(parseInt(test))
console.log(parseFloat(test))



// LESSON 31

function first() {
	// do somithing
	setTimeout(function)							// CALLBACK дає нам можливість завершити першу функцію і лише після цього буде запуск другої функції
}


function learnJS(lang, callbac) {
	console.log(`Я учу ${lang}`);
	callbac();
}

function done() {
	console.log('Я пройшов урок!');
}

learnJS('Javascript', done);


// LESSON 32. Объекты, деструктуризация объектов (ES6)

const obj = new Object();
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('test');
	}
};

options.makeTest();

console.log(Object.keys(options).length);

const {border, bg} = options.colors;							// деструктизація обєктів 
console.log(border)
// delete options.name;

// console.log(options);

// for (let key in options) {							// for in для того щоб переглядати обєкти через for of обєкти неможна перебирати
// 	if (typeof(options[key]) === 'object')	{
// 		for (let i in options[key]) {
// 			console.log(`Свойства ${i} имеет значения ${options[key][i]}`);
// 			counter++;
// 		}
// 	}	else {
// 			console.log(`Свойства ${key} имеет значения ${options[key]}`);
// 			counter++;
// counter++;
// 	}						
// }

// console.log(counter);





































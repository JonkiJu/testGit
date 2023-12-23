'use strict';

let number;

function seat() {
	number = +prompt('Яке ваше місце', '');
	while (number > 36 || number < 0 ) {
		alert ('Помилка. Таких мість не існує');
		number = prompt('Яке ваше місце', '');
	}
	// while (typeof(number) === 'string') {
	// 	alert ('Помилка. Перевірте правильність написання');
	// 	number = prompt('Яке ваше місце', '');
	// }
	if (number >= 1 && number <= 4) {
		alert ('Ваше купе під номером 1');
	} else if (number >= 5 && number <= 8) {
		alert ('Ваше купе під номером 2');
	} else if (number >= 9 && number <= 12) {
		alert ('Ваше купе під номером 3');
	} else if (number >= 13 && number <= 16) {
		alert ('Ваше купе під номером 4');
	} else if (number >= 17 && number <= 20) {
		alert ('Ваше купе під номером 5');
	} else if (number >= 21 && number <= 24) {
		alert ('Ваше купе під номером 6');
	} else if (number >= 25 && number <= 28) {
		alert ('Ваше купе під номером 7');
	} else if (number >= 29 && number <= 32) {
		alert ('Ваше купе під номером 8');
	}

}


seat();

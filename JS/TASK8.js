// let time;
// function calcTime () {
// 	time = +prompt('Ковертор хвилин в годиини. Введіть ваші хвилини', '');
	
    
//     // console.log(typeof(time));

// }

// calcTime ();

let minutes;
function hoursAndMinutesFromMinutes() {
	minutes = +prompt('Введіть кількість хвилин','');
	let hours = Math.floor(minutes / 60);
	let minutesLeft = minutes % 60;
	if (hours === 1) {
		console.log (`${hours} година ${minutesLeft} хвилин`) ;
	}
	else if (hours >= 1 && hours <= 4) {
		console.log (`${hours} години ${minutesLeft} хвилин`) ;
	}
	else if (hours > 5) {
		console.log (`${hours} годин ${minutesLeft} хвилин`) ;
	}
	else if (hours < 1){
		console.log (`${minutesLeft} хвилин`) ;
	}
	else if (minutes < -1){
		console.log ('Помилка, введена невірне числоа') ;
	}

}
  
hoursAndMinutesFromMinutes();
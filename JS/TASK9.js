function fib(num) {
	result = '';
	first = 0;
	second = 1;
	for (i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
		}
		else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}
	return result;
}


console.log(fib(5));


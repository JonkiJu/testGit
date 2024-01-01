const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};


function isBudgetEnough(data) {
	const widths = shoppingMallData.shops.map((shop) => shop.width);
	const lengths = shoppingMallData.shops.map((shop) => shop.length);

	let totalWidths = 0;
	for (let i = 0; i < widths.length; ++i) {
		totalWidths += widths[i];
	}
	let totalLengths = 0;
	for (let i = 0; i < lengths.length; ++i) {
		totalLengths += lengths[i];
	}
	let metr = totalWidths * totalLengths * data.height;

	if (metr * data.moneyPer1m3 <= data.budget) {
		console.log ('Бюджета достатньо');
	}
	else {
		console.log ('Бюджета недостатьно');
	}
};

isBudgetEnough(shoppingMallData);














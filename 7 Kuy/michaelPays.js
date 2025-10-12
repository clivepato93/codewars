// https://www.codewars.com/kata/5b043e3886d0752685000009/train/javascript
// Fundamentals

function michaelPays(costs) {
	//Insert your code here
	if (costs < 5) {
		return Math.round(costs * 100) / 100;
	}

	if (costs <= 30) {
		const third = Math.round((costs / 3) * 100) / 100;
		return Math.round((costs - third) * 100) / 100;
	}
	return Math.round((costs - 10) * 100) / 100;
}

// console.log(michaelPays(15), 10);
// console.log(michaelPays(4), 4);
// console.log(michaelPays(30), 20);
// console.log(michaelPays(80), 70);
// console.log(michaelPays(22), 14.67);
// console.log(michaelPays(5.9181), 3.95);
// console.log(michaelPays(28.789), 19.19);
// console.log(michaelPays(4.325), 4.33);
console.log(michaelPays(71.4));

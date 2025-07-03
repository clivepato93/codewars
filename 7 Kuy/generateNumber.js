// https://www.codewars.com/kata/5d62961d18198b000e2f22b3/train/javascript
// TAGS
// Algorithms
function generateNumber(squad, n) {
	let numInSquad = false;
	const possibleNumbers = Array.from({ length: 9 })
		.fill(0)
		.map((val, i) => val + i + 1);
	function numberGenerator() {
		for (let index = 0; index < possibleNumbers.length; index++) {
			for (let j = possibleNumbers.length - 1; j >= 0; j--) {
				const res = possibleNumbers[index] + possibleNumbers[j];
				if (
					squad.indexOf(+`${possibleNumbers[index]}${possibleNumbers[j]}`) ==
						-1 &&
					n == res
				) {
					return +`${possibleNumbers[index]}${possibleNumbers[j]}`;
				}
			}
		}

		return null;
	}
	for (let index = 0; index < squad.length; index++) {
		if (squad[index] == n) {
			numInSquad = true;
			const res = numberGenerator();
			if (res) {
				return res;
			}
		}
	}

	return !numInSquad ? n : null;
}
// console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 15, 69], 11), 11);

console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 69], 11), 29);

console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 69], 11), 38);

console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 38, 47, 56, 65, 69, 74, 83, 92],11),null);

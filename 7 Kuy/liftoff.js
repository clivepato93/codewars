// https://www.codewars.com/kata/53d6387b83db278202000802/train/javascript
// Fundamentals Arrays Sorting Strings

function liftoff(instructions) {
	//...
	for (let i = 0; i < instructions.length - 1; i++) {
		let currLow = i;
		for (let j = i + 1; j < instructions.length; j++) {
			if (instructions[j] > instructions[currLow]) {
				currLow = j;
			}
		}

		[instructions[i], instructions[currLow]] = [
			instructions[currLow],
			instructions[i],
		];
	}
	return instructions.join(" ") + " liftoff!";
}

console.log(
	liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]),
	"10 9 8 7 6 5 4 3 2 1 liftoff!"
);

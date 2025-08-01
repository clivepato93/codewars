// https://www.codewars.com/kata/5889a8b335de69cc620000c8/train/javascript
function swapDiagonals(matrix) {
	//coding and coding..
	for (let i = 0; i < matrix.length; i++) {
		let a = row[i];
		let b = row[matrix.length - (i + 1)];
		row[i] = b;
		row[matrix.length - (i + 1)] = a;
	}
	return matrix;
}

console.log(
	swapDiagonals([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
	[
		[3, 2, 1],
		[4, 5, 6],
		[9, 8, 7],
	]
);

console.log(
	swapDiagonals([
		[43, 455, 32, 103],
		[102, 988, 298, 981],
		[309, 21, 53, 64],
		[2, 22, 35, 291],
	]),
	[
		[103, 455, 32, 43],
		[102, 298, 988, 981],
		[309, 53, 21, 64],
		[291, 22, 35, 2],
	]
);
console.log(swapDiagonals([[239]]), [[239]]);
console.log(
	swapDiagonals([
		[1, 10],
		[100, 1000],
	]),
	[
		[10, 1],
		[1000, 100],
	]
);

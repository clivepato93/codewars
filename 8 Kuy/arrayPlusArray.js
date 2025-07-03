// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// TAGS
// Fundamentals
// Arrays
// Debugging
function arrayPlusArray(arr1, arr2) {
	//   return arr1 + arr2; //something went wrong
	let sum=0,sum2 = 0;
	for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
		sum2 += arr2[i];
	}
	return sum + sum2;
}

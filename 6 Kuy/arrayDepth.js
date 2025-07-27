// http://codewars.com/kata/56b3b9c7a6df24cf8c00000e/train/javascript

function arrayDepth(array, count = 1,storage = []) {
	for (let index = 0; index < array.length; index++) {
        const val = array[index]

		if (typeof val == 'object') arrayDepth(val, count+1,storage);
       
	}
    storage.push(count)
return Math.max(...storage)
}



// console.log(arrayDepth([true]), 1);
// console.log(arrayDepth([], 1));
console.log(arrayDepth([2, "yes", [true, false]]), 2);
console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]), 6);
console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]), 2);

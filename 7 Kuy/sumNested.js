// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript

// const sumNested = (arr, total=[0]) => {
// 	//
// 	for (let index = 0; index < arr.length; index++) {
// 		if (typeof arr[index] == "object") {
// 			sumNested(arr[index], total);
// 		} else {
// 			total[0] += arr[index];
// 		}
// 	}
// 	return total[0];
// };

    const sumNested = (arr, total=[]) => {
        //
        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] == "object") {
                sumNested(arr[index], total);
            } else {
                total.push(arr[index])
            }
        }

        return total.reduce((acc,current)=>acc+=current,0);
    };

console.log(sumNested([[1], []]), 1);
console.log(sumNested([[1, 2, 3, 4]]), 10);

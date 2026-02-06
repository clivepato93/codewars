// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascripts
// Fundamentals
// Data Structures
// Mathematics
function process2Arrays(arr1, arr2) {
	// your code here
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
    let both =0;
    let unique = 0;
    let ex1 = 0;
    let ex2 = 0;
	for (let v of set1) {
		if(set2.has(v)){
            both++;

        }
        else{
            unique++;
            ex2++;
        }
	}
    for (let v of set2) {
		if(set1.has(v)){
           

        }
        else{
            unique++;
            ex1++;
        }
	}
    
	return [both,unique,ex2,ex1];
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [2, 4, 6, 8, 10, 12, 14];
console.log(process2Arrays(arr1, arr2), [4, 8, 5, 3]);

    
    arr1 = [32, 34, 3, 4, 39, 10, 43, 13, 11, 18, 21, 22, 7, 25, 26, 36]; 
    arr2 = [32, 5, 38, 8, 41, 42, 12, 48, 40, 21, 22, 26, 10, 30];

      console.log(process2Arrays(arr1, arr2),[5, 20, 11, 9]);
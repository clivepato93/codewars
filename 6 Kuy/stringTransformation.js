// https://www.codewars.com/kata/6927680a91f3d91da9d2b16c/train/javascript
// Strings
// Logic
// Arrays
// Performance

// "U" → convert the string to uppercase

// "L" → convert the string to lowercase

// "R" → reverse the string
// "D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")
// performance so i could reduce operations
// D and R need to run an inner loop if R count is odd then i could just do the reverse one twice if even
// function stringTransformation(string, transformations) {
// 	// Good luck :)

// 	const trans = [];
// 	for (let i = 0; i < transformations.length; i++) {
// 		if (trans[trans.length - 1] == "L" && transformations[i] == "L") {
// 			//       console.log("not equal")
// 			continue;
// 		} else if (trans[trans.length - 1] == "U" && transformations[i] == "U") {
// 			//       console.log("not equal")
// 			continue;
// 		}
// 		// if(trans[trans.length-1] =='L' && trans[trans.length-1]!= transformations[i]){
// 		//       console.log("not equal")
// 		// trans.push(transformations[i])
// 		// }
// 		// else if(trans[trans.length-1] =='U' && trans[trans.length-1]!= transformations[i]){
// 		//       console.log("not equal")
// 		// trans.push(transformations[i])
// 		// }
// 		else {
// 			trans.push(transformations[i]);
// 		}
// 	}
// 	console.log(transformations, trans);

// 	string = [...string];
// 	for (let letter of trans) {
// 		if (letter == "U") {
// 			string = string.map((l) => l.toUpperCase());
// 		} else if (letter == "L") {
// 			string = string.map((l) => l.toLowerCase());
// 		} else if (letter == "R") {
// 			string = string.reverse();
// 		} else if (letter == "D") {
// 			string = string.map((l) => l + l);
// 		}
// 	}
// 	return string.join("");
// }

function stringTransformation(string, transformations) {
	// Good luck :)

  
  let d =0;
  let r = 0;
  let lOrU = '';
	string = [...string];
	for (let i = 0; i < transformations.length;i++ ) {
    
		if (transformations[i] == "U") {
        lOrU ='U'
      }

		else if (transformations[i] == "L") {
lOrU ='L';
     
		} else if (transformations[i] == "R") {
      r++;
		} else if (transformations[i] == "D") {
       d++;
		}
	}

  if(d){
    string = string.map(l=> l.repeat(2**d))
  }
  if(r%2){
    string = string.reverse()
  }
  if(lOrU=='U'){
    string = string.map(l=> l.toUpperCase())
  }
  if(lOrU=='L'){
    string = string.map(l=> l.toLowerCase())
  }
	return string.join("");
}
// [
//   'D', 'R', 'R', 'L',
//   'L', 'L', 'U', 'R',
//   'R', 'U', 'R', 'D',
//   'L', 'U', 'D', 'D'
// ]
// console.log(stringTransformation("abcd", ["U","R"]))
// console.log(
// 	stringTransformation("abcd", [
// 		"L","L","L"
// 	])
// );
// console.log(
// 	stringTransformation("abcd", [
// 		"D",
// 		"R",
// 		"R",
// 		"L",
// 		"L",
// 		"L",
// 		"U",
// 		"R",
// 		"R",
// 		"U",
// 		"R",
// 		"D",
// 		"L",
// 		"U",
// 		"D",
// 		"D",
// 	])
// );
console.log(stringTransformation( 'abc',[ 'R', 'R' ]),'abc')
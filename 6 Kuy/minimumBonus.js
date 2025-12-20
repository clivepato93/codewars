// https://www.codewars.com/kata/595ef0c7458ad5facc000019/train/javascript
// not yet solved
// i think the score reset to 1 once the current value is
// lower than the previous one by default the first value will always be 1
// function minimumBonus(scores) {
// 	//   console.log(scores)
// 	//coding and coding..
// 	let sum = 0;
// 	let increment;
// 	for (let i = 0; i < scores.length; i++) {
// 		if (
// 			scores[i - 1] != undefined &&
// 			scores[i + 1] != undefined &&
// 			scores[i - 1] == scores[i + 1] &&
// 			scores[i - 1] < scores[i]
// 		) {
// 			increment = Math.ceil(scores[i + 1] / 10) + 1;
// 		}
        
//             else if(scores[i-1]==scores[i]){
//                 increment==1
//             }
//           else   if (scores[i - 1] < scores[i]) {
// 			increment++;
// 		} else if (scores[i + 1] !== undefined && scores[i] > scores[i + 1]) {
// 			const rightSide = Math.ceil(scores[i + 1] / 10) + 1;
// 			increment = rightSide;
// 		} 
//         else {
// 			increment = 1;
// 		}
// 		sum += increment;
// 	}
// 	return sum;
// }


function minimumBonus(scores) {
	let sum = 0;
  let lastScore = 0;
  const v = [];
	for (let i = 0; i < scores.length; i++) {
    if(!(scores[i]>scores[i-1]) && !(scores[i]>scores[i+1])){
      lastScore = 1
    }
    if(scores[i]>scores[i-1]){
    lastScore++;
// 	    console.log('first if lastScore is ', lastScore); 
    } 
   if(scores[i]>scores[i+1]){
   lastScore> Math.max(1,Math.floor(scores[i+1]/10))?lastScore = lastScore:Math.floor(scores[i]/10) ;
//     sum+= lastScore;
//     console.log('second if lastScore is ',lastScore)
  }
    else{
//       lastScore =1;
//           console.log( 'else lastScore is ', lastScore)

    }
//     console.log(sum)
    v.push(lastScore)
//       sum+= lastScore;
  }
//   console.log(v,scores)

  	return v.reduce((t,c)=>t+c,0);
  }
console.log(minimumBonus([20, 30, 40, 30, 20, 10]), 13);
console.log(minimumBonus([47, 1, 32]), 5);
console.log(minimumBonus([20, 30, 10, 30, 40, 10, 20, 30, 40, 30]), 20);
console.log(minimumBonus([10, 20, 30]), 6);
console.log(minimumBonus([30, 20, 20, 10]), 6);

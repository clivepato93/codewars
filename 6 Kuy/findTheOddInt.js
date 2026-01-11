// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Fundamentals
// counter obj loop through obj
function findOdd(A) {
  //happy coding!
  let obj = {}
  for(let n of A){
    obj[n] = obj[n] +1||1;
  }
  
  for(let n in obj){
    
    if(obj[n]%2) return +n
  }
  return 0;
}


console.log(findOdd([1,1,2], 2));
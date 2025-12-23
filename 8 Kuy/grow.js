// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// Fundamentals
// Arrays
function grow(x){
  let n = 1;
  for(let i =0;i<x.length;i++){
    n*= x[i]
  }
  return n
}
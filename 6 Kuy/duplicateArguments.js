// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
// Algorithms
function solution(...args){

  const v = {}
  for(let value of args){
    if(v[value] == typeof value) return true;
    v[value] = typeof value;
  }
  return false
}
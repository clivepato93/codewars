// https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript
// Arrays
// Algorithms
// Fundamentals
// array[i][i] i think
function matrix(array) {
    for(let i = 0; i < array.length; i++){
      array[i][i] = array[i][i]<0?0:1;
    }
  return array
}
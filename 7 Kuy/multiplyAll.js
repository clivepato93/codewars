// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript/692ef199d9f6085df97cb55a
// Functional Programming
// Fundamentals
function multiplyAll(arr) {
  return function(n){
    return arr.map(num=> num*n)
  }
}
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
// TAGS 
// Fundamentals
// Arrays
function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a,b)=>a-b)
}

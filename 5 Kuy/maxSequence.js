//  https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// Tags
// Algorithms
// Lists
// Dynamic Programming
// Fundamentals
// Performance
// O(n) Kadane's Algorithm
var maxSequence = function(array){
  // ...
  let local = array.length?array[0]: 0
  let globalMax = array.length?array[0]: 0
  for (let index = 1; index < array.length; index++) {
    local =local+array[index]> array[index]?local+array[index]:array[index];
    globalMax = local>globalMax?local:globalMax
  }
  return Math.max(0,globalMax)
}


    // console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
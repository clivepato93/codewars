//https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript
// TAGS 
// Arrays
// Fundamentals
function reject(array, predicate) {
  const final = [];
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) final.push(array[i]);
  }
  return final;
}

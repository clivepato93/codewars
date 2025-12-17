// https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript
// Arrays
// Functional Programming
// Fundamentals
function findInArray(array, iterator) {
  for(let i =0; i<array.length;i++){
    if(iterator(array[i],i)) return i 
  }
  return -1
};

// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c/train/javascript
// TAGS 
// Fundamentals
// Algorithms

function divisibleCount(x, y, k) {
   //code me
//   console.log(arguments)
  return Math.floor((y/k)-Math.floor((x-1)/k))
}
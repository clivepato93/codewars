// https://www.codewars.com/kata/57de78848a8b8df8f10005b1/train/javascript
// Arrays
// Regular Expressions
// Fundamentals
function howMuchCoffee(events) {
  // Code go here

  let count = 0;
  for(let event of events) {
    if(/^(cw|cat|dog|movie)$/i.test(event) && event === event.toLowerCase()) {
    count += 1
    }
    else if( /^(cw|cat|dog|movie)$/i.test(event) && event === event.toUpperCase()) {
    count += 2
    }
  }
  return count < 4 ? count : "You need extra sleep";
}

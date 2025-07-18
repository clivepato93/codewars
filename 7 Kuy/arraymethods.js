// https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript
// TAGS 
// Functional Programming
// Fundamentals
Array.range = function(start, count) {
  const arr = []
  while(count){
    arr.push(start)
    start++;
    count--;
  }
  return arr;
}

Array.prototype.sum = function() {
  let sum =0;
  while(this.length){
    sum+= this.pop()
    
  }
  return sum;
}
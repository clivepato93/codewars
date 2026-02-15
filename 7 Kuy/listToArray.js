// https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript
// Data Structures
// Arrays
// Fundamentals
function listToArray(list) {
  //write your code here
  const arr = [];
  for(let nodes = list; nodes; nodes= nodes.next){
    arr.push(nodes.value)
  }
    return arr;
}

// https://www.codewars.com/kata/55e5253dcd20f821c400008e/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Algorithms

const buildList = require('./buildList')
function Node(data,next=null) {
  this.data = data === undefined ? null : data;
  this.next = next;
}


// function shuffleMerge(first, second) {
//   // Your code goes here.
//   if(!first) return second
//   if(!second) return first
  
//   return second && turn?new Node(first.data, shuffleMerge(first.next,second,!turn)): new Node(second.data, shuffleMerge(first,second.next,!turn))
// //   return first.data && !flip && second ? new Node(first.data,shuffleMerge(first.next,second, !flip)) : new Node(second.data,shuffleMerge(first,second.next, !flip)) 
// }

function shuffleMerge(first, second) {
  // Your code goes here.
  if(!first) return second
  if(!second) return first
  
  return new Node(first.data, shuffleMerge(second,first.next))
}

    // console.log(shuffleMerge(new Node(23), new Node(44)), buildList([23, 44]), "result should be 23 -> 44 -> null.");

    console.log(shuffleMerge(buildList([1, 3]), buildList([2, 4])), buildList([1, 2, 3, 4]), "result should be 1 -> 2 -> 3 -> 4 -> null.");
    // console.log(shuffleMerge(buildList([3]), buildList([2, 4])), buildList([3, 2, 4]), "result should be 3 -> 2 -> 4 -> null.");
    // console.log(shuffleMerge(buildList([3, 4, 5]), buildList([9, 2])), buildList([3, 9, 4, 2, 5]), "result should be 3 -> 9 -> 4 -> 2 -> 5 -> null.");
    // console.log(shuffleMerge(buildList([4, 5]), buildList([1])), buildList([4, 1, 5]), "result should be 4 -> 1 -> 5 -> null.");
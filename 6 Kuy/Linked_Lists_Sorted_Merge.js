// https://www.codewars.com/kata/55e5d31bf7ca1e44980000a7/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Algorithms
function Node(data,next=null) {
    this.data = data === undefined ? null : data;
    this.next = next;
}
const buildList = require('./buildList')

function sortedMerge(first, second) {
  // Your code goes here.
    if(!first) return second
  if(!second) return first
  
  return first.data<second.data? new Node(first.data, sortedMerge(first.next,second)): new Node(second.data, sortedMerge(first,second.next))
}

    console.log(sortedMerge(buildList([1, 3]), buildList([2, 4])), buildList([1, 2, 3, 4]), "result should be 1 -> 2 -> 3 -> 4 -> null.");
    console.log(sortedMerge(buildList([3]), buildList([2, 4])), buildList([2, 3, 4]), "result should be 2 -> 3 -> 4 -> null.");
    // console.log(sortedMerge(buildList([3, 4, 5]), buildList([2, 9])), buildList([2, 3, 4, 5, 9]), "result should be 2 -> 3 -> 4 -> 5 -> 9 -> null.");
    // console.log(sortedMerge(buildList([4, 5]), buildList([1])), buildList([1, 4, 5]), "result should be 1 -> 4 -> 5 -> null.");
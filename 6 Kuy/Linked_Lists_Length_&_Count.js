// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
// TAGS Linked Lists
// Data Structures
// Fundamentals
const buildOneTwoThree = require('../7 Kuy/push_&_buildOneTwoThree')
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head,l=0) {
  // Your code goes here.
  if(!head) return l
  return length(head.next,l+=1)

}

function count(head, data,c=0) {
  // Your code goes here.
  if(!head) return c
  if(head.data==data) c++;
  return count(head.next,data,c)
}
//   console.log(length(null), 0, "Length of null list should be zero.");
//   console.log(length(new Node(99)), 1, "Length of single node list should be one.");
//   console.log(length(buildOneTwoThree()), 3, "Length of the three node list should be three.");

//   const list =  buildOneTwoThree();
//   console.log(list)
//   console.log(count(list, 1), 1, "list should only contain one 1.");
//   console.log(count(list, 2), 1, "list should only contain one 2.");
//   console.log(count(list, 3), 1, "list should only contain one 3.");
//   console.log(count(list, 99), 0, "list should return zero for integer not found in list.");
//   console.log(count(null, 1), 0, "null list should always return count of zero.");
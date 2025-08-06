// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
// TAGS Linked Lists
// Data Structures
// Fundamentals

const Node = require('../7 Kuy/Linked_LIsts_Create_Node');
const {buildOneTwoThree} = require('../7 Kuy/push_&_buildOneTwoThree');

function length(head) {
  let counter = 0
  for (; head; head = head.next) {
    counter+=1
  }
  return counter
}

function length(head) {
  if(!head) return 0

  return 1 + length(head.next)
}

function length(head,c=0) {
  if(!head) return c

  return length(head.next,c+=1)
}

function count(head,value){
  if(!head) return 0
  if(head.data==value) return 1+count(head.next,value)
  return 0+count(head.next,value)
}

  // console.log(length(null), 0, "Length of null list should be zero.");
  // console.log(length(new Node(99)), 1, "Length of single node list should be one.");
  // console.log(length(buildOneTwoThree()), 3, "Length of the three node list should be three.");

  const list =  buildOneTwoThree();
  console.log(list)
  console.log(count(list, 1), 1, "list should only contain one 1.");
  console.log(count(list, 2), 1, "list should only contain one 2.");
  console.log(count(list, 3), 1, "list should only contain one 3.");
  console.log(count(list, 99), 0, "list should return zero for integer not found in list.");
  console.log(count(null, 1), 0, "null list should always return count of zero.");
// https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Fundamentals
const buildOneTwoThree = require('../7 Kuy/push_&_buildOneTwoThree');
class Node {
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

// function insertNth(head, index, data) {
//   // Your code goes here.
//   // Return the head of the list.
//     if(typeof head == 'function') throw new Error('error')

//   if(!index|| !head) return new Node(data,head)
//     // let prev = 
//   let ref =index
// let prev = head
// //   let pointer = head
//   while(index){ 
//       if(index!=ref && prev.next) prev = prev.next
//       index--;
// }

// prev.next = new Node(data,prev.next)
//   return head
// }

function insertNth(head, index, data) {
  // Your code goes here.
  // Return the head of the list.

  if(!index|| !head) return new Node(data,head)
    // let prev = 
  head.next = insertNth(head.next,index-1,data)


  return head
}


// console.log(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
    // console.log(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");
// console.log(insertNth(buildOneTwoThree(), 1, 23).next, 1, "value for node at index 0 should be 1.");
  //  console.log(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
// console.log(insertNth(buildOneTwoThree(), 3, 23).next.next.next, 23, "value for node at index 3 should be 23.");
// console.log(insertNth(buildOneTwoThree(), 2, 23).next.next, 23, "value for node at index 2 should be 23.");

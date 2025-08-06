// https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Fundamentals
const {buildOneTwoThree} = require('../7 Kuy/push_&_buildOneTwoThree');

function insertNth(head,index,data){
  if(index&& !head) throw Error;
  if(!index) return new Node(data,head)
  head.next = insertNth(head.next,index-=1,data)
return head
}

function insertNth(head,index,data){
  if(index&& !head) throw Error;
   return !index? new Node(data,head): (head.next = insertNth(head.next,index-=1,data),head)
  

}


// console.log(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
    // console.log(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");
// console.log(insertNth(buildOneTwoThree(), 1, 23).next, 1, "value for node at index 0 should be 1.");
  //  console.log(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
// console.log(insertNth(buildOneTwoThree(), 3, 23).next.next.next, 23, "value for node at index 3 should be 23.");
// console.log(insertNth(buildOneTwoThree(), 2, 23).next.next, 23, "value for node at index 2 should be 23.");

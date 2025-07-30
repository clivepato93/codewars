// https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript
// TAGS Linked Lists
// Data Structures
// Fundamentals
function Node(data,next=null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  // Your code goes here.
  // Remember to return the head of the list.
  if(!head || data<= head.data) return new Node(data,head)
  head.next = sortedInsert(head.next,data)
  return head
}

function sortedInsert(head, data) {
  // Your code goes here.
  // Remember to return the head of the list.
return !head || data<= head.data? new Node(data,head) : (head.next = sortedInsert(head.next,data),head)
}



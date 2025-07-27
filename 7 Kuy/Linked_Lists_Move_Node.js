// https://www.codewars.com/kata/55da347204760ba494000038/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Fundamentals

function Node(data, head =null) {
  this.data = data;
  this.next = head;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  // Your code goes here.
  // Remember to return the context.
  const data = source.data
  source= source.next
  return new Context( source, new Node(data,dest));
}


function moveNode(source, dest) {
  // Your code goes here.
  // Remember to return the context.
  return new Context(source.next, new Node(source.data,dest));
}
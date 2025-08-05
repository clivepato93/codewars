// https://www.codewars.com/kata/55dd5386575839a74f0000a9/train/javascript
const buildList = require('../6 Kuy/buildList')
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  // Your code goes here.
  // Remember to return the context.
  if (!head || !head.next) throw Error;
  let turn = true;
  const a = new Node(head.data);
  const b = new Node(head.next.data);
  let aPointer = a
  let bPointer = b
  head = head.next.next
  for (head;head;head=head.next) {
    if(turn){
      aPointer.next = new Node(head.data)
      aPointer = aPointer.next
    }else{
      bPointer.next = new Node(head.data)
      bPointer = bPointer.next
    }
    turn = !turn
  }
  return new Context(a, b);
}



console.log(alternatingSplit(buildList([1, 2, 3, 4, ])), "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null");

// console.log(alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])), "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null");

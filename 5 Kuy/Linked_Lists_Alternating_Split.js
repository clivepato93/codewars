// https://www.codewars.com/kata/55dd5386575839a74f0000a9/train/javascript
const buildList = require("../6 Kuy/Linked_Lists_buildList");
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

console.log(
  alternatingSplit(buildList([1, 2, 3, 4])),
  "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null"
);

// console.log(alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])), "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null");

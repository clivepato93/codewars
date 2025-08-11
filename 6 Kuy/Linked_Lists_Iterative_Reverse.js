// https://www.codewars.com/kata/55e72695870aae78c4000026/train/javascript

function Node(data,next=null) {
  this.data = data === undefined ? null : data;
  this.next = next;
}

const buildList = require('./Linked_Lists_buildList')





// console.log(reverse(buildList([15, 13, 11, 9, 7, 5, 3, 1])),buildList([15, 13, 11, 9, 7, 5, 3, 1]))

console.log(reverse(buildList([ 1,3])),buildList([1,3]))
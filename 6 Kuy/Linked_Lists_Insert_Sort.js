// https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045/train/javascript

const buildList = require('./Linked_Lists_buildList')
const {buildOneTwoThree} = require('../7 Kuy/push_&_buildOneTwoThree')
const Node = require('../7 Kuy/Linked_LIsts_Create_Node')

const sortedInsert = require('./Linked_Lists_Sorted_Insert')


function insertSort(head) {
  // Your code goes here.
  // Remember to return the head of the list.
  if(!head || !head.next) return head;
  let nodes = null
  for(;head;head=head.next){
    if(!head) return nodes
    if(head){

        nodes = sortedInsert(nodes,head.data)
    }
  }
}

function insertSort(head) {
  // Your code goes here.
  // Remember to return the head of the list.
  return !head ? head: sortedInsert(insertSort(head.next),head.data)
}


//    console.log(insertSort(new Node(5)).data, 5, "list should be return if length is 1.");

console.log(insertSort(buildList([4, 8, 1, 3])), 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");


// console.log(insertSort(buildList([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).data, 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");

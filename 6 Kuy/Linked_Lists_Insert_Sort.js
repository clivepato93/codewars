// https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045/train/javascript

const buildList = require('./buildList')


function Node(data,next=null) {
  this.data = data;
  this.next = next;
}


const sortedInsert = require('./Linked_Lists_Sorted_Insert')
// function insertSort(head) {
//   // Your code goes here.
//   // Remember to return the head of the list.
//   if(!head) return head
//    let nums = []
//   for(let nodes = head;nodes;nodes = nodes.next){
//     nums.push(nodes.data)
//   }
//   nums = nums.sort((a,b)=>a-b)
//   let newList = new Node(nums[0]);
//   let pointer = newList
//   for (let index = 1; index < nums.length; index++) {
//     pointer.next = new Node(nums[index])
//     pointer = pointer.next
//   }
//   return newList
// }


console.log(insertSort(buildList([4, 8, 1, 3])), 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");


// console.log(insertSort(buildList([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).data, 1, "Node at index 0 of InsertSort(4 -> 8 -> 1 -> 3 -> 2 -> 9 -> 6 -> 5 -> 9 ->2) should return 1.");

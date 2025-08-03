// https://www.codewars.com/kata/55d9f257d60c5fd98d00001b/train/javascript
// TAGS
// Linked Lists
// Data Structures
// Fundamentals
const buildList = require("./buildList");

// function removeDuplicates(head) {
// 	// Your code goes here.
// 	// Remember to return the head of the list.
// 	if (!head) return head;
//     head.next = removeDuplicates(head.next)
// 	if(head.next && head.data == head.next.data) return head.next
// 	return head;
// }pro

function removeDuplicates(head) {
	// Your code goes here.
	// Remember to return the head of the list.

	let pointer = head;
	while(pointer && pointer.next){

		if (pointer.data == pointer.next.data){
			pointer.next = pointer.next.next
			
		} 
		else{
			pointer = pointer.next
		}
	}
	return head;
}


// console.log(
// 	removeDuplicates(buildList([1, 2, 2])),
// 	buildList([1, 2]),
// 	"should remove the duplicate '2' entries"
// );
// console.log(
// 	removeDuplicates(buildList([1, 1, 1, 1, 1])),
// 	buildList([1]),
// 	"should remove the duplicate '1' entries"
// );
// console.log(
// 	removeDuplicates(buildList([1, 2, 3, 3, 4, 4, 5])),
// 	buildList([1, 2, 3, 4, 5]),
// 	"should remove the duplicate '3' and '4' entries"
// );
// console.log(
// 	removeDuplicates(buildList([1, 1, 1, 1, 2, 2, 2, 2])),
// 	buildList([1, 2]),
// 	"should remove the duplicate '1' and '2' entries"
// );

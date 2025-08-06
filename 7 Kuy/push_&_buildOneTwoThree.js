// https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Fundamentals

const Node = require('./Linked_LIsts_Create_Node')

function push(data, head) {
	// Go.
	return new Node(data, head);
}

// function buildOneTwoThree() {
// 	// Go.
// 	let head;
// 	let current = head;
// 	for (let i = 1; i <= 3; i++) {
// 		if (i == 1) {
// 			head = new Node(i);
// 			current = head;
// 		} else {
// 			current.next = new Node(i);
// 			current = current.next;
// 		}
// 	}
// 	return head;
// }

// function buildOneTwoThree() {
// 	// Go.

// 	return [3,2,1].reduce((nodes,currentData)=>push(currentData,nodes),null);
// }
// function buildOneTwoThree(arr=[3,2,1]) {
// 	// Go.

// 	return !arr.length? null: new Node(arr.pop(),buildOneTwoThree(arr))
// }

// function buildOneTwoThree(arr=[1,2,3]){
// 	return !arr.length?null: new Node(arr.shift(),buildOneTwoThree(arr))
// }

function buildOneTwoThree(){
	return new Node(1,new Node(2,new Node(3)))
}



// console.log(buildOneTwoThree());

module.exports = {buildOneTwoThree,push};
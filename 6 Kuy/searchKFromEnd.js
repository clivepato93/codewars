// https://www.codewars.com/kata/5567e7d0adb11174c50000a7/train/javascript
// TAGS
// Linked Lists
// Algorithms
// Data Structures

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	static build(arr) {
		if (arr.length === 0) return null;

		const head = new Node(arr[0]);
		let current = head;

		for (let i = 1; i < arr.length; i++) {
			current.next = new Node(arr[i]);
			current = current.next;
		}

		return head;
	}
}

function searchKFromEnd(linkedList, k) {
	// Magic goes here
	const arr = [];
	for (linkedList; linkedList; linkedList = linkedList.next) {
		arr.push(linkedList.data);
	}
	return k > arr.length ? null : arr[arr.length - k];
}

console.log(
	searchKFromEnd(Node.build([5, 2, 3, 1]), 2),
	3,
	"Failed for 5 -> 2 -> (3) -> 1, k = 2"
);
console.log(
	searchKFromEnd(Node.build([5, 2, 3, 1]), 1),
	1,
	"Failed for 5 -> 2 -> 3 -> (1), k = 1"
);
console.log(
	searchKFromEnd(
		Node.build([19, 18, 17, 16, 4, 3, 4, 2, 1, 65, 23, 3, 12, 34, 2, 6, 2]),
		7
	),
	23,
	"Failed for 19 -> 18 -> 17 -> 16 -> 4 -> 3 -> 4 -> 2 -> 1 -> 65-> (23) -> 3 -> 12 -> 34 -> 2 -> 6 -> 2, k = 7"
);
console.log(
	searchKFromEnd(Node.build([3, 2, 1, 5]), 5),
	null,
	"Failed for 3 -> 2 -> 1 -> 5, k = 5\n remember if it is outside the bounds of list to return null"
);

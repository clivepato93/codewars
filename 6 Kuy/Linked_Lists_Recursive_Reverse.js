function Node(data, head = null) {
	this.data = data === undefined ? null : data;
	this.next = head;
}

function buildList(arr) {
	if (arr.length === 0) return null;

	const head = new Node(arr[0]);
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		current.next = new Node(arr[i]);
		current = current.next;
	}

	return head;
}

function reverse(head) {
	// Your code goes here.
	// if(head)
	if (!head.next) return head;

	if (head.next) {
		reverse(head.next);

		head.next.next = head;
    head.next = null;
	}

	return head;
}

const list = buildList([3, 8, 1]);
console.log(
	reverse(list),
	buildList([1, 8, 3]),
	"result should be 1 -> 8 -> 3 -> null."
);

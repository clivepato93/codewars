function Node(data, head = null) {
	this.data = data;
	this.next = head;
}

function push(head, data) {
	// Go.
	return new Node(data, head);
}

function buildOneTwoThree() {
	// Go.
	let head;
	let current = head;
	for (let i = 1; i <= 3; i++) {
		if (i == 1) {
			head = new Node(i);
			current = head;
		} else {
			current.next = new Node(i);
			current = current.next;
		}
	}
	return head;
}
console.log(buildOneTwoThree());



// function Node(data) {
//   this.data = data === undefined ? null : data;
//   this.next = null;
  
// }

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
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

function reverse(list) {
  // Your code goes here.
  const nums = []
  for(list;list;list = list.next){
    nums.push(list.data)
  }
  let newList = nums.length? Node(nums[nums.length-1]):null;
  let current = newList;
  for(let i= nums.length-2;i>=0;i--){
    current.next = Node(nums[i])
    current = current.next
  }
  return newList
}

console.log(reverse(buildList([15, 13, 11, 9, 7, 5, 3, 1])),buildList([15, 13, 11, 9, 7, 5, 3, 1]))
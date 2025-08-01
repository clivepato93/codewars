// https://www.codewars.com/kata/582c5382f000e535100001a7/train/javascript
// TAGS Linked Lists
// Recursion
// Algorithms

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// function parse(string) {
//   // Write your code here
//   const values = string.split(' -> ')
//   values.pop()
//   let obj;
//   let ref;
//   for (let index = 0; index < values.length; index++) {
//     if(!index){
//       obj = new Node(+values[index])
//       ref= obj
//     }
//     else{
//       ref.next = new Node(+values[index])
//       ref = ref.next
//     }
//   }
//   return obj || null
// }

function parse(string) {
  // Write your code here
  const matches = string.match(/\d+/)
  if(matches){
    return new Node(+matches[0],parse(string.replace(matches[0],'')))
  }

  return null
}

function parse(string) {
  // Write your code here
  return string.match(/\d+/).length ?  new Node(+string.match(/\d+/)[0],parse(string.replace(string.match(/\d+/)[0],''))):null
}


    console.log(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
    console.log(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
    console.log(parse("null"), null);
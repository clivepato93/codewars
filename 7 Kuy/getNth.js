// https://www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript
// TAGS 
// Linked Lists
// Data Structures
// Fundamentals
const buildOneTwoThree = require('../7 Kuy/push_&_buildOneTwoThree')

function getNth(node, index) {
  // Your code goes here.
  if(!node) throw new Error('Invalid');
  return !index ? node: getNth(node.next,index-=1)
}


  var list = buildOneTwoThree();
    // console.log(getNth(list, 0).data, 1, "First node should be located at index 0.");
    // console.log(getNth(list, 1).data, 2, "Second node should be located at index 1.");
    // console.log(getNth(list, 2).data, 3, "Third node should be located at index 2.");
    console.log("Invalid index value should throw error.", getNth(list, 3));
    console.log("Invalid index value should throw error.", getNth(list, 100));
    console.log("Null linked list should throw error.", getNth(null, 0));
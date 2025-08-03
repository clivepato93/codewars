// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript
// TAGS
// Linked ListsData StructuresFundamentals

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if(!listA && !listB) return null
 if(listA && !listB) return listA
 if(!listA && listB) return listB
listA.next = append(listA.next,listB)
  return listA
}
    console.log(append(null, buildOneTwoThree()), buildOneTwoThree(), "appending a list to null should return the list.");
    console.log(append(buildOneTwoThree(), null), buildOneTwoThree(), "appending null to a list should return the list.");

 console.log(append(new Node(1), new Node(2)), buildOneTwo(), "appending a list to another list should return the concatenated list.");
    console.log(append(new Node(2), new Node(1)), buildTwoOne(), "appending a list to another list should return the concatenated list.");
    console.log(append(new Node(2), new Node(1)).next.next, null, "null should exist at end of concatenated linked list.");
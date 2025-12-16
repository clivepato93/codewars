// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript
// Arrays
// Fundamentals
// Sorting

function sort(initialArray, sortingArray) {
  const newArr = []
  for(let i = 0;i < initialArray.length;i++){
    newArr[sortingArray[i]] = initialArray[i];
  }
  return newArr;
}

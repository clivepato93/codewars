// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript
// TAGS
// Fundamentals
function findAll(array, n) {
  // your code here
  const indexes = [];
  for(let i =0;i<array.length;i++){
    if(array[i]==n){
      indexes.push(i)
    }
  }
  return indexes;
}
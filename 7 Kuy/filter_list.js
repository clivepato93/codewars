// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// TAGS 
// Lists
// Filtering
// Data Structures
// Fundamentals

function filter_list(l) {
  // Return a new array with the strings filtered out
  const newArr = []
  for(let i = 0;i<l.length;i++){
    if(typeof l[i]=='number') newArr.push(l[i])
  }
  return newArr
}
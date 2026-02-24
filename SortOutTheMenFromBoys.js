// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
// Fundamentals
// Algorithms
// Sorting
function menFromBoys(arr){
  //your code here
  arr = [...new Set(arr)]

  let even = arr.filter(a => !(a&1) ).sort((a,b)=> a-b) 
  let odds = arr.filter(a =>(a&1)).sort((a,b)=> b-a)
  return even.concat(odds)

}

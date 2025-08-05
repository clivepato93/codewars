// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
// TAGS 
// Arrays
// Fundamentals

function firstNonConsecutive (arr) {
  for(let i =1;i<arr.length;i+=1){
    if(arr[i]-arr[i-1]!=1) return arr[i]
  }
return null
}
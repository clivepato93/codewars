// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/train/javascript
// TAGS 
// Fundamentals
// Arrays
function smallEnough(a, limit){
  if(a.length==0) return true
  if(a.pop()>limit) return false
  return smallEnough(a,limit)
    
}
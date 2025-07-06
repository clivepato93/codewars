// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
// TAGS 
// Fundamentals
// Algorithms
// Arrays
function getAges(sum,difference){
  const right = (sum-difference)/2
  const left = right+difference
  if(sum<0||difference<0) return null
  return left<0||right<0?null:[left,right]
};
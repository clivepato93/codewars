// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
// Fundamentals
// regex to solve this
function c(s){
    //..
  const lower = s.match(/[a-z]/g)|| [];
  const higher = s.match(/[A-Z]/g)|| [];
  if(lower.length>= higher.length) return s.toLowerCase()
  return s.toUpperCase()
}

// https://www.codewars.com/kata/5516ab668915478845000780/train/javascript
// TAGS
// Fundamentals
function reverseByCenter(s){
  // ...
  const midPoint = Math.floor(s.length/2)
  if(!(s.length%2))return s.slice(midPoint)+s.slice(0,midPoint)
  return s.slice(midPoint+1)+s.slice(midPoint,midPoint+1)+s.slice(0,midPoint)
}
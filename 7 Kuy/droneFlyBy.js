// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
// Fundamentals
// Strings
// Arrays

function flyBy(lamps, drone){
  let x = drone.replace(/./g, 'o').slice(0,lamps.length)
  return x + lamps.slice(x.length)
}

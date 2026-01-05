// https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
// Refactoring
// Restricted
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}


function find(a, e) {
  let c = a.indexOf(e)
  return c> -1 ?c : "Not found";
}

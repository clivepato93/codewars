//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// TAGS
// Fundamentals
// Arrays
function oddOrEven(array) {
  //enter code here
  let total = 0;
  for (const number of array) {
    total += number;
  }

  return total % 2 ? "odd" : "even";
}

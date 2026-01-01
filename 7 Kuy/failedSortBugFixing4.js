// https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript
// Debugging
// Sorting
// let sortArray = function(value) {
//   return value.split('').sort((c, p) => c / p ).join('');
// }

let sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}
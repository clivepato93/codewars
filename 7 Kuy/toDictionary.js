// https://www.codewars.com/kata/56c6a67ed3702be0fc0017d8/train/javascript
// TAGS
// Arrays
// Fundamentals

// Object.defineProperty(
//     Array.prototype,
//     'toDictionary',
//     {value:
//         function toDictionary(keyFn, valueFn=keyFn) {
//             // your code here
//           const obj = {};
//           for(key of  this){
//             obj[keyFn(key)] = valueFn?valueFn(key):key;
//           }
//           return obj;
//         }
//     }
// );

Object.defineProperty(Array.prototype, "toDictionary", {
  value: function toDictionary(keyFn, valueFn = keyFn) {
    return this.reduce((obj, key) => (obj[keyFn(key)] = valueFn(key),obj), {});
  },
});

let arr = [1, 2, 3, 4, 5];
console.log(
  arr.toDictionary(
    (k) => k,
    (v) => true
  ),
  { 1: true, 2: true, 3: true, 4: true, 5: true }
);
console.log(
  arr.toDictionary(
    (k) => k,
    (v) => v * v
  ),
  { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }
);
console.log(
  arr.toDictionary((k) => k),
  { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
);

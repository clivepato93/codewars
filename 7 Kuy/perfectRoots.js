// https://www.codewars.com/kata/5932c94f6aa4d1d786000028/train/javascript
// TAGS
// Algorithms

function perfectRoots(n) {
    return Math.sqrt(Math.sqrt(Math.sqrt(n))) == Math.floor(Math.sqrt(Math.sqrt(Math.sqrt(n))))
}
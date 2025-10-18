// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
// Strings
// Fundamentals

function solve(a, b) {
  //..
  const setA = new Set(a);
  const setB = new Set(b);
  const arr = [];
  for (const element of a) {
    if(setB.has(element)) continue;
    else{
arr.push(element)
    }
  }
  for (const element of b) {
    if(setA.has(element)) continue;
    else{
arr.push(element)
    }
  }
  return arr.join('')
}

console.log(solve("xyab", "xzca"), "ybzc");
console.log(solve("xyabb", "xzca"), "ybbzc");
console.log(solve("abcd", "xyz"), "abcdxyz");
console.log(solve("xxx", "xzca"), "zca");

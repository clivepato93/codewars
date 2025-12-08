// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Arrays
// Fundamentals
// Algorithms

function arrayDiff(a,b) {
let i = 0;
const obj = {}
for (let i = 0; i < b.length; i++) {
   obj[b[i]] = true
    
}
const newArr = []
while(i!=a.length){
  if(!obj[a[i]]){
    newArr.push(a[i])
    
  }
  
    i++;

  
}  

return newArr
}

console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");

// https://www.codewars.com/kata/588e27b7d1140d31cb000060/train/javascript
// TAGS
// Fundamentals
function generatePairs(n) {
  const arr = []
  for(let i = 0;i<=n;i++){
    for(let j=i;j<=n;j++){
      arr.push([i,j])
    }
  }
  return arr
}
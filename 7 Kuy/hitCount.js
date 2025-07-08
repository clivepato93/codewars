// https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript
// TAGS 
// Arrays
// Fundamentals
function counterEffect(hitCount) {
 //do your thing
 const final = []
 for (let i = 0; i < hitCount.length; i++) {
     const row = []
    for (let start = 0; start <= hitCount[i]; start++) {
        row.push(start)
    }
    final.push(row)
 }
 return final
}
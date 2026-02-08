

// https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript
// Strings
// Fundamentals
function solve(s){
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let currSub = s[i];
        if(+currSub[currSub.length-1] % 2) count++;
        for (let j = i+1; j < s.length; j++) {
            currSub+= s[j];
            if(+currSub[currSub.length-1] % 2) count++;
            
        }
        
    }
  return count;
};

console.log(solve("1341"),7);
console.log(solve("1347231"),20);
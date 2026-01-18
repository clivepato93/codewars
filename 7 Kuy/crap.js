// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
// Fundamentals
// Strings
// Arrays
// Mathematics
function crap(x, bags, cap){
    let currBag = 0;
  let res = "Clean";
    for(let i = 0;i<x.length;i++){
        for(let j = 0; j< x[i].length;j++){
            if(!bags && x[i][j] =='@'){
                res= "Cr@p";
            }
            if(x[i][j] =='D') return "Dog!!";
            if(x[i][j] =='@') {
                currBag++;
                currBag >= cap? (currBag=0,bags--):currBag;

            }
        }
    }
    return res
}


console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
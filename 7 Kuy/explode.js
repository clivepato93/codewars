// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
// TAGS 
// Fundamentals
// Strings
// Arrays


function explode(x){
    if(typeof x[0] !=='number' && typeof x[1]!=='number') return 'Void!'
    const arr = []
    for (let index = 0; index < (typeof (x[0]+x[1]) == 'number'? x[0]+x[1]: typeof x[0] == 'number'? x[0]:x[1]); index++) {
        arr.push(x)
        
    }
    return arr
}

// console.log(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
console.log(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
console.log(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
console.log(explode(['a', 'b']), 'Void!');  
console.log(explode(["a", 0]), []); 
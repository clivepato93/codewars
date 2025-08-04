// https://www.codewars.com/kata/68851563123e161332d2a84b/train/javascript

function hasLoop(indices) {
    if(!indices.length) return false
  let values = {}
  let start = 0
  while(start>=0){
    if( indices[start] === undefined) return false
    if(values[indices[start]]) return true
    else{
      values[start] = true
  }
  start = indices[start]
    
  }
  return true
  }

      console.log( hasLoop([1,2,3,4,2]), true, `hasLoop([1,2,3,4,2])` );
    console.log( hasLoop([1,2,3,4,5]), false, `hasLoop([1,2,3,4,5])` );
    console.log( hasLoop([0]), true, `hasLoop([0])` );
    console.log( hasLoop([3,2,1,6]), false, `hasLoop([3,2,1,6]` );
    console.log( hasLoop([1,0]), true, `hasLoop([1,0])` );

    console.log( hasLoop([3,2,1,4]), false, `hasLoop([3,2,1,4])` );
    console.log( hasLoop([2,0,1,5]), true, `hasLoop([2,0,1,5])` );
    console.log( hasLoop([]), false, `hasLoop([])` );
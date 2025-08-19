// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// TAGS 
// Arrays
// Fundamentals

function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length!=10) return false
  const obj = {}
  for(letter of walk){
    if(!obj[letter]) obj[letter] = 1;
    
    else{
      obj[letter] += 1;
    }
  }
  return obj.n == obj.s && obj.e == obj.w
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');

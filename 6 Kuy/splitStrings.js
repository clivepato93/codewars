// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Regular Expressions 
// Strings
// Algorithms

function solution(str){
  if(!str) return []
   let splits = [];
  let curr = [];
  for(let i = 0;i<str.length;i++){
    if(curr.length!=2){
      curr.push(str[i])
    }
    else{
      splits.push(curr.join(''));
      curr.length=0;
      curr.push(str[i])
    }
  }
  if(curr.length!=2){
    curr.push('_')
  }
    splits.push(curr.join(''))
  return splits;
}

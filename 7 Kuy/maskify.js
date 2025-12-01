// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
if(cc.length<=4) return cc
  const values = [...cc];
  for(let i = 0; i<cc.length-4;i++){
    values[i]= '#';
  }
  return values.join('')
}
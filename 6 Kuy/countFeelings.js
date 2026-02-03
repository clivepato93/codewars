// https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/train/javascript
// Fundamentals
// Strings
// sets to check value and fast lookup
function countFeelings(string, array) {
  const letters = new Set(string);
  let count = 0
  for(let v of array){
    const word = new Set(v)
    let valid = true;
    for(let letter of word){
      if(letters.has(letter)){
        continue;
      }
      else{
        valid = false;
        break;
      }
    }
    if(valid){
      count++;
    }
    
  }
  return `${count} feeling${count !== 1?'s':''}.`
}

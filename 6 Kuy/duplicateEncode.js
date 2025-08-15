// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// TAGS 
// Strings
// Arrays
// Fundamentals

function duplicateEncode(word){
    // ...
  word=word.toLowerCase()
  const obj = {}
  let newString = ''
  for(let letter of word){
    if(obj[letter]) obj[letter] +=1
    else{
      obj[letter] =1
    }
  }
  for(let letter of word){
    if(obj[letter]==1) newString+='('
    
  else{
    newString+=')'
  }
  }
    return newString;
}
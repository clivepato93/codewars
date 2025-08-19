// https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript
// TAGS 
// Strings
// Fundamentals

function encode(str) {
  // Write code here.
 let encoder = ''
  for(letter of str){
    const x =letter.charCodeAt(0)
    if( x>=65 && x <=90){
      encoder+=(x-64)
    }
    else  if(x>=97 && x <=122){

      encoder+=(x-96)
    }
    else{
      encoder+=letter
    }
  }
  return encoder;
}
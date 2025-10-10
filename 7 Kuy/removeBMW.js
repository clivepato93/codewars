// https://www.codewars.com/kata/59de795c289ef9197f000c48/train/javascript
// Fundamentals Strings Regular Expressions
function removeBMW(str){
  //TO DO
  
  if(typeof str !='string'|| str.length==0){
    throw new Error("This program only works for text.");
  }
  const arr = [];
  for(let i =0;i<str.length;i++){
    if(str[i]=='b'|| str[i]=='m'|| str[i]=='w'|| str[i]=='B'|| str[i]=='M'||str[i]=='W'){
      continue 
    }
    else{
      arr.push(str[i])
    }
  }
  return arr.join('')
}
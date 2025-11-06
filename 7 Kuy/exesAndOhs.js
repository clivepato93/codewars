// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// Fundamentals

function XO(str) {
    //code here
  let counter = 0
  for(let i=0;i<str.length;i++){
    if(str[i]=='x'|| str[i]=='X') counter++;
    else if(str[i]=='o'|| str[i]=='O') counter--;
          }
    return counter==0
}
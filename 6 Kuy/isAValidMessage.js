// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript
// TAGS
// Fundamentals
function isAValidMessage(message){
  // your code
  const matches  =    message.match(/(\d+|[a-z]+)/g)
  const results = matches??[];
if(results.length%2) return false
  for(let i=0;i<results.length;i+=2){
    if(!(+results[i]==results[i+1].length) ){
      return false
    }
  }
  return true;
}


function isAValidMessage(message){
  // console.log(message)
  // your code
  for(let i =0; i<message.length;i++){
   
      let digit = +message[i]
      while(/\d/.test(message[i+1])){
        if(/\d/.test(message[i])){
          digit*=10;
          digit+=  +message[i+1];
          i++
      
        }
        else{
          break;
        }
      
       
    }
    i+=digit
  
    if(message[i]==undefined|| !/[a-z]/i.test(message[i])){
      return false
    }
}
  return true;
  }


console.log(isAValidMessage("3hey5hello2hi"), true);
console.log(isAValidMessage("4code13hellocodewars"), true);

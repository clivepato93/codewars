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

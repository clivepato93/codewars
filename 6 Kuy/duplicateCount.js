// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// TAGS 
// Strings
// Fundamentals

function duplicateCount(text){
  //...
  
  const letters = new Set()
text = [...text.toLowerCase()]
  for(let i=0;i<text.length;i++){
    
    if(text.lastIndexOf(text[i])>-1 && text.indexOf(text[i])!=text.lastIndexOf(text[i])) 
      {
       letters.add(text[i]) 
      }
  }
  
  return letters.size
}
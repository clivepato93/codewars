// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
// Fundamentals
// ASCII Art

function generateShape(integer){
  const str = [];
  for(let i =0;i<integer;i++){
      const curr = [];
    for(let j = 0; j < integer; j++){
      curr.push('+')
    }
    str.push(curr.join(''))
  }
  return str.join('\n')
}

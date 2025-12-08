// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript/691f77d59a093da81eb1212a
// Strings
// Fundamentals

function alphabetPosition(text) {
  const newText=[];
  for(let i =0; i<text.length;i++){
    let num;
    if(/[a-z]/.test(text[i])){
      num =((text[i].charCodeAt(0)-97)%26)
    }
    else if(/[A-Z]/.test(text[i])){
      num = ((text[i].charCodeAt(0)-65)%26)
    }
     num>=0? newText.push(num+1): newText
  }
  return newText.join(' ')
}
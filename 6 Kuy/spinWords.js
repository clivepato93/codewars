// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// TAGS
// Strings
// Algorithms
// function spinWords(string){
//   //TODO Have fun :)
//   return string.match(/[a-z]+/ig).map(word=> (word.length<5)?word: [...word].reverse().join('')).join(' ')
// }

// function spinWords(string){
//   //TODO Have fun :)
//   return string.match(/[a-z]+/ig).map(word=>{ 
    
//     if(word.length<5)return word
//     let newWord = ''
//   for (let index = word.length-1; index>=0; index--) {
//     newWord+=word[index]
    
//   }
//   return newWord
  
//   }).join(' ')
// }


function spinWords(string){
  //TODO Have fun :)
  let newString = ''
  let currentChar =''
  for (let index = 0; index < string.length; index++) {
      if(/[a-z]/i.test(string[index])){
          const currentPosition = index
          let finalPosition =index;
        for (let j = index+1; j < string.length; j++) {
            finalPosition= j
            if(!/[a-z]/i.test(string[j])){
                finalPosition--;
                break;

            }
        }

        const sum = finalPosition-currentPosition;
        if(sum>=4){
            for (let x = finalPosition; x>=currentPosition; x--) {
                newString+= string[x]
            }
        }
        else{
            for (let z = currentPosition; z<=finalPosition; z++) {
                newString+= string[z]
            }
        }
        index+=sum
        finalPosition = 0;
    }
    else{
        newString+=string[index]
         finalPosition = 0;
    }
    
    
  }
  return newString
}

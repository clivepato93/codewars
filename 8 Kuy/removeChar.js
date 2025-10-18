// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// Strings
// Fundamentals

function removeChar(str){
 //You got this!
return str.slice(1,str.length-1)
};



function removeChar(str){
 //You got this!
  const letters = []
for(let i =1;i<str.length-1;i++){
  letters.push(str[i])
}
  return letters.join('')
};

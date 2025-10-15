// https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript
// TAGS 
// Algorithms
// Strings
// Fundamentals

function firstNonRepeated(s) {
  // your code here
  s = [...s]
  for(let i = 0;i<s.length;i++){
    if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
      return s[i]
    }
  }
  return null
}



  console.log(firstNonRepeated("test"), 'e');
  console.log(firstNonRepeated("teeter"), 'r');
 console.log(firstNonRepeated("1122321235121222"), '5');
 console.log(firstNonRepeated("rend"), 'r');
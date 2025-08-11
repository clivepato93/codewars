// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
// TAGS 
// Strings
// Fundamentals

function aliasGen(first, last){
    // Code Here
//   console.log(first[0].toUpperCase())
const regex = /[a-z]/i;
  if(!regex.test(first[0])|| !regex.test(last[0])){
    return "Your name must start with a letter from A - Z."
  }
  return firstName[first[0].toUpperCase()] +' '+surname[last[0].toUpperCase()]
}
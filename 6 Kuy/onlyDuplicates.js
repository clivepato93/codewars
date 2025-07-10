// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
// TAGS 
// Fundamentals
// Strings
// Algorithms
function onlyDuplicates(str) {
  // your code here
const obj ={}
const duplicatesEntries ={}
 let cs = "";
  for (let i =0;i<str.length;i++) {
     const char = str[i]
     if(char in obj && char in duplicatesEntries){
        duplicatesEntries[char] +=1
        cs+= char.repeat(duplicatesEntries[char])
        duplicatesEntries[char] = 0 
     }
     else{
        obj[char] = true
        duplicatesEntries[char] =1
     }
  }
    for (const key in obj) {
        if(obj[key]){
            str= str.replace(key,'')
        }
    }
  return str
} 

function onlyDuplicates(str) {
  // your code here
const duplicatesEntries ={}
 let cs = [];
  for (let i =0;i<str.length;i++) {
     const char = str[i]
     if(char in duplicatesEntries){
        duplicatesEntries[char] +=1

     }
     else{
        duplicatesEntries[char] =1
     }
  }
    for (const letter of str) {
        if(duplicatesEntries[letter]>1){
            cs.push(letter)
        }
    }
  return cs.join('')
} 



console.log(onlyDuplicates('abccdefee'), 'cceee', "onlyDuplicates('abccdefee')")
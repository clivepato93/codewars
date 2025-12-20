// https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript
// Strings
// Sorting

// generate an array holding only a-z/i
// compare each letter in lowercase form

function alphabetized(s) {
  console.log(s)
  const arr = []
  for(let i = 0;i <s.length;i++){
    if(/[a-z]/i.test(s[i])) arr.push(s[i])
  }
  return arr.sort((a,b)=> a.toLowerCase().charCodeAt(0)-b.toLowerCase().charCodeAt(0)).join('')
}
console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')
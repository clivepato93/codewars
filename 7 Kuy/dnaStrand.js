// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// Strings
// Fundamentals
function dnaStrand(dna){
  const pairs = {A:'T', C:'G', G:'C', T:'A'};
  let newDna = []
  for(let letter of dna) {
    newDna.push(pairs[letter])
  }
  return newDna.join('')
}



console.log(dnaStrand("AAAA"),"TTTT","String AAAA is")
   console.log(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
   console.log(dnaStrand("GTAT"),"CATA","String GTAT is")
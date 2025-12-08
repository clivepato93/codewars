// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript/692dda613a05ef5190f39452
// Strings
// Mean Square Error
Fundamentals

function moveVowel(input) {
  const vowels = [];
  const others = [];
  for(let i =0; i<input.length;i++){
    if(/[aieou]/.test(input[i])){
      vowels.push(input[i])
    }
    else{
      others.push(input[i])
    }
  }
  return others.join('')+vowels.join('')
}
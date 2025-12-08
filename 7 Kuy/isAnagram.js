// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript/6911fd4b539ffdc1f77b98bb
// Strings
// Fundamentals

var isAnagram = function(test, original) {
  [test, original] = [test.toLowerCase(),original.toLowerCase()]

  const letters = {}
  for(let letter of test){
    letters[letter] = (letters[letter] || 0) +1;
  }
  
  for(let letter of original){
    if(letters[letter] == undefined){
      return false
    }
    else{
      letters[letter] -1 ==0? delete letters[letter] : letters[letter]--;
    }
  }
    return Object.keys(letters) ==0
  
};

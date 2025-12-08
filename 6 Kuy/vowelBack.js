// https://www.codewars.com/kata/57cfd92c05c1864df2001563/train/javascript/6935ba77b4548a91455f3e20

// Fundamentals
// Strings
// Arrays
// Algorithms

function vowelBack(s){
  console.log(s)
  const v = {'a':'v','u':'p','i':'i'};
  const e = {'c':'b','o':'n','d':'a','e':'a'};
  const newStr = [];
  for(let i =0;i<s.length;i++){
    if(v[s[i]]){
      newStr.push(v[s[i]])
    }
   else if(e[s[i]]){
      newStr.push(e[s[i]])
    }
    else if(s[i].charCodeAt(0)+9>122){
     const letter =  String.fromCharCode(s[i].charCodeAt(0)-17);
      newStr.push(e[letter]? s[i]:letter);
    }
    else{
      const letter = String.fromCharCode(s[i].charCodeAt(0)+9);
      newStr.push(e[letter]? s[i]:letter);

    }
  }
  return newStr.join('')
}
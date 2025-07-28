// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript
// TAGS 
// Arrays
// Strings
// Fundamentals

function wordSearch(query, seq){
  //your code here
  const re = new RegExp(query, "i");
//   console.log(re.test('abc'))
  return seq.filter(word=> re.test(word))
}


    console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
    console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
    console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
    console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);
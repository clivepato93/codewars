// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript
// Strings
// Algorithms
function grabscrab(anagram, dictionary) {
  const s = [...anagram].sort().join('')
  // Your code here
    return dictionary.filter(w=> [...w].sort().join('')=== s);
}

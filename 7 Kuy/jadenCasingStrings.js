// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Strings
// Fundamentals
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     const words = this.split(' ').map(word=> word.replace(/\w/, r=> r.toUpperCase()))
     return words.join(' ');
   }
  }
);
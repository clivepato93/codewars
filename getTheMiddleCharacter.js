// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// Fundamentals
// Strings
function getMiddle(s) {
  //Code goes here!
  const mid = Math.floor(s.length/2)
        return s.length & 1 ? s[mid]: s.slice(mid-1,mid+1);

}

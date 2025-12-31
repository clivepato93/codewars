// https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript

// Debugging
// Fundamentals
// Recursion

// function collatz(n, count) {
//   if (n < 1) return count;
//   n = (n % 2 = 0) ? n / 2 : n * 3 + 1;
//   collatz(n, count + 1);
// }

function collatz(n, count=1 ) {
  if (n < 1) return count;
  n = n % 2 == 0 ? n / 2 : n * 3 + 1;
  return collatz(n, count + 1);
}



console.log(collatz(2), 2)
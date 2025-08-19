// https://www.codewars.com/kata/588502f87987a27f690001f7/train/javascript

// TAGS
// Sets
// Fundamentals

function areEqual(s1, s2) {
  // ...
  const check = [];
  if (s2.size > s1.size) {
    [s1, s2] = [s2, s1];
  }
  s1.forEach((element) => {
    if (!s2.has(element)) {
      check.push(false);
    }
  });
  return check.length ? false : true;
}

function areEqual(s1, s2) {
  // ...

  return !s1.difference(s2).size;
}

function notEqual(s1, s2) {
  // ...
  const check = [];
  if (s2.size > s1.size) {
    [s1, s2] = [s2, s1];
  }
  s1.forEach((element) => {
    if (!s2.has(element)) {
      check.push(true);
    }
  });
  return check.length ? true : false;
}

function notEqual(s1, s2) {
  // ...

  return !!s1.difference(s2).size;
}

let A1 = new Set([1, 2, 3]),
  A2 = new Set([3, 2, 1]),
  B = new Set([1, 2, 5]),
  D = new Set(["1", "2", "3"]);

console.log(areEqual(A1, A1), "A == A");
console.log(areEqual(A1, A2), "{1,2,3} == {3,2,1}");
console.log(areEqual(A2, A1), "{3,2,1} == {1,2,3}");
console.log(areEqual(A1, B), "{1,2,3} != {1,2,5}");
console.log(areEqual(A1, D), "{1,2,3} != {'1','2','3'}");

// console.log(notEqual(A1, B), "{1,2,3} != {1,2,5}");
// console.log(notEqual(A1, new Set()), "{1,2,3} != {}");
// console.log(notEqual(A1, D), "{1,2,3} != {'1','2','3'}");
// console.log(notEqual(A1, A2), "{1,2,3} == {3,2,1}");

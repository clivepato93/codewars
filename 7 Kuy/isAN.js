// https://www.codewars.com/kata/534d80775371ece88d0010b5/train/javascript
// TAGS
// Fundamentals

function isAN(value) {
  try {
    console.log(
      typeof value.valueOf() == "number",
      typeof +`${value}` == "number",
      +`${value}`,
      value === value
    );
    return (
      typeof value.valueOf() == "number" &&
      typeof +`${value}` == "number" &&
      value === value &&
      !Number.isNaN(+`${value}`)
    );
  } catch (error) {
    return false;
  }
}

// function isAN(value) {
//   try {
//     return value + 0 == value || value + 0 === value;
//   } catch (error) {
//     return false;
//   }
// }

function isAN(value) {
  try {
    // console.log(Object.getPrototypeOf(value),Object.getPrototypeOf(value).constructor)
    if(value!==value || value == Infinity || value == -Infinity) return false
        return typeof value == 'number' && value.prototype == 'number'

    // return typeof value.valueOf() === 'number' &&  Object.getPrototypeOf(value) === Object.getPrototypeOf(1)
  } catch (error) {
    return false;
  }
}


console.log(isAN("123"), false);
console.log(isAN(new Number(123)), true);
console.log(isAN(123), true);
console.log(isAN(NaN), false);
console.log(isAN(true), false);
console.log(isAN(undefined), false);
console.log(isAN(null), false);
console.log(isAN(Math.PI), true);
console.log(
  isAN({
    valueOf() {
      return 123;
    },
  }),
  false
);
console.log(isAN(123n), false);

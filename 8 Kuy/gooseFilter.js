// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript/690b4445973005c0e31f7de2
// Arrays
// Fundamentals

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird=> geese.includes(bird)==false)
  // return an array containing all of the strings in the input array except those that match strings in geese
};
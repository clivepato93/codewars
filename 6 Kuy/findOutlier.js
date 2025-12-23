

function findOutlier(integers) {
  arr = integers.sort(function(a, b) {
    return ((a & 1) - (b & 1));
  });
  
  return arr[0] % 2 === arr[1] % 2
       ? arr[arr.length-1] 
       : arr[0]
}

console.log(findOutlier([2, 11, 2602, 36]))
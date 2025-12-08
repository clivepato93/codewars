// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript/6917300b6c96896fc80c3fa5
// Algorithms
// Tutorials
// Sorting

function bubblesortOnce(a) {
  // TODO
  const newA = [...a]
  for(let i =0;i< newA.length-1;i++){
    if(newA[i]>newA[i+1]){
      let temp = newA[i]
      newA[i] = newA[i+1]
      newA[i+1] = temp
    }
  }
  return newA
}
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// function descendingOrder(n){
  //...
//   return +[...`${n}`].sort((a,b)=>b-a).join('')
// }

function descendingOrder(n){
  //...
  let maxNum =0
  let arr = []
  let increment = 0
  while(n>0){
    const mod = (n%10)
    arr.push(mod)
    n= Math.floor(n/10);
    // console.log(n,mod)
    increment++
  }
  arr = arr.sort((a,b)=>a-b)
  for (let i = 0; i < arr.length; i++) {
    const num = i?(10**i*arr[i]):arr[i]
      maxNum+= num
     
  }
  return maxNum
}

    console.log(descendingOrder(15), 51)
    console.log(descendingOrder(1021), 2110)
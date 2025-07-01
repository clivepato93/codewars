// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// TAGS
// Fundamentals
function findOdd(A) {
  //happy coding!
  const obj = {}
  if(A.length==1){
    return A[0]
  }
  for (let index = 0; index < A.length; index++) {
      const num = A[index]
    if(num in obj){
        obj[num]= obj[num]+1
    }
    else{

        obj[num]=1;
    }
    
  }
 for (const key in obj) {
    if (obj[key]%2) {
       
        return key
    }
 }
}

//    console.log([7], 7);
//     console.log([0], 0);
    // console.log(findOdd([1,1,2]), 2);
    // console.log([0,1,0,1,0], 0);
    console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);

    // console.log([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    // console.log([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    // console.log([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    // console.log([10], 10);
    // console.log([1,1,1,1,1,1,10,1,1,1,1], 10);
    // console.log([5,4,3,2,1,5,4,3,2,10,10], 1);
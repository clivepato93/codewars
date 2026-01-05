// http://codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
// TAGS 
// Mathematics
// Algorithms
// Fundamentals


function toBinary(n){
    const binary  = []
    let total = 0
    let first = true;
    while(n){
        binary.push(n%2)
        n = Math.floor(n/2)
    }
    console.log(binary)
    while(binary.length){
        if(first) {
            
            total+= binary.pop()
            first = false
        }
        else{

            const value = binary.pop()
            if(!value){
                total*=10
            }
            else{
                total*=10
                total+=1
            }
    }
    }
  return total;
}

// function toBinary(n){
//     const binary  = []
//     let total = 0
//     let increment = 0
//     while(n){
//         binary.push(n%2)
//         console.log(2<<n)
//         total*=(10*increment)
//         total+= binary.pop()
//         n = Math.floor(n/2)
//         increment++
//     }

//   return total;
// }





// console.lo
    // console.log(toBinary(1), 1);
    // console.log(toBinary(2), 10);
    // console.log(toBinary(3), 11);
    // console.log(toBinary(5), 101);  

var x = 1;

{
  console.log(x);
  var x = 2;
}

console.log(x);


// http://codewars.com/kata/59ad13d5589d2a1d84000020/train/javascript
// Fundamentals

function reverseFizzBuzz(array) {
  // your code
  const final = [0,0]
  const options ={Fizz:'',Buzz:''}
for (let i=0;i<array.length;i++) {
    const value = array[i];
    if((value=='FizzBuzz'||value=='Fizz') && !(options.Fizz)){
        options.Fizz = value
        final[0] = i+1
    }
    else if( (value=='FizzBuzz'||value=='Buzz') && !(options.Buzz)){
        if(options.Fizz != value){
            options.Buzz = value

            final[1] = i+1
        } 
    }
}
  return !final[1] ?[final[0],final[0]]:final
}

    //   console.log(reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]), [3,5]);
    //   console.log(reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]), [2,3]);
      console.log(reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]), [2,2]);
    //   console.log(reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]), [1,6]);
//       console.log(reverseFizzBuzz( [
//     1,  2,      3,  'Buzz', 5,  6,
//     7,  'Buzz', 9,  10,     11, 'FizzBuzz',
//     13, 14,     15, 'Buzz', 17, 18,
//     19, 'Buzz', 21, 22,     23, 'FizzBuzz',
//     25, 26,     27, 'Buzz', 29, 30,
//     31, 'Buzz', 33, 34,     35, 'FizzBuzz',
//     37, 38,     39, 'Buzz', 41, 42,
//     43, 'Buzz', 45, 46,     47, 'FizzBuzz',
//     49, 50,     51, 'Buzz', 53, 54,
//     55, 'Buzz', 57, 58,     59, 'FizzBuzz',
//     61, 62,     63, 'Buzz', 65, 66,
//     67, 'Buzz', 69, 70,     71, 'FizzBuzz',
//     73, 74,     75, 'Buzz', 77, 78,
//     79, 'Buzz', 81, 82,     83, 'FizzBuzz',
//     85, 86,     87, 'Buzz', 89, 90,
//     91, 'Buzz', 93, 94,     95, 'FizzBuzz',
//     97, 98,     99, 'Buzz'
//   ]
// ),[12,4])
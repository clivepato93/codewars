// https://www.codewars.com/kata/58856a06760b85c4e6000055/train/javascript      
// Fundamentals
// Binary
// Bits
function bitsBattle(numbers) {
    let even = 0;
    let odd = 0;
    function getOnes(n){
        let count = 0;
        while(n){
            if(n & 1){
                count++;
            }
            n >>= 1;
        }
        return count;
    }
    function getZeros(n){
        let count = 0;
        while(n){
            if( (n & 1) == 0){
                count++;
            }
            n >>= 1;
        }
        return count;
    }
    numbers.forEach(num => {
        if(!num){

        }
        else if(num % 2){
            odd+= getOnes(num)
        }
        else{
            even+= getZeros(num)
        }
    });
    if(even>odd){
        return 'evens win';
    }
    else if(odd>even){
        return 'odds win'
    }
  return 'tie'; //code here
}

console.log(bitsBattle([5, 3, 14]), 'odds win');
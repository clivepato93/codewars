// https://www.codewars.com/kata/54ab259e15613ce0c8001bab/train/javascript

// Recursion
// Algorithms
function selfConverge(number, nseq = []) {
    let length = 0;
	function descending(n) {
		const arr = [];
       
		while (n) {
			arr.push(n % 10);
			n = Math.floor(n / 10);
            length++;
		}
      
		let newN = arr.sort((a, b) => b - a).reduce((t, c) =>  t * 10 + c, 0);

        
        return newN
	}
	function ascending(n) {
		const arr = [];
        
		while (n) {
			arr.push(n % 10);
			n = Math.floor(n / 10);
            
		}
		return arr.sort((a, b) => a - b).reduce((t, c) => t * 10 + c, 0);
	}
	let res = descending(number) - ascending(number);
	if (res == 0) {
		return -1;
	}
	for(let i = 0;i<nseq.length;i++) {
        if(nseq[i]==res){

            return nseq.length+1;
        }
	}
    if(length!= String(res).length){
      for(let i = 0;i< length- String(res).length;i++){
        res*=10;
      }  
    }
    nseq.push(res);
	return selfConverge(res, nseq);
}
console.log(selfConverge(2111),6)
// console.log(selfConverge(50000),4)
// console.log(selfConverge(4321), 4);
// console.log(selfConverge(1111), -1);
// console.log(selfConverge(123), 6);

// ASCII ArtFundamentals
function pattern(n) {
	// Happy Coding ^_^
	const str = Array.from({ length: n+1 }, (_, i) => i).join("");
	const arr = [];
    let increment = 1;
	for (let i = 8; i < str.length; i += increment) {
       
		arr.push(
            str.slice(i, str.length) +
            str.slice(1, i)
		);
        if(i==10){
            increment=2
        }
	}
	return arr.join("\n");
}

//  console.log( pattern(7),"1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456");
//  console.log( pattern(11));
console.log(pattern(13));

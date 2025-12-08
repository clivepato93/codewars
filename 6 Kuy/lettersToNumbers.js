// https://www.codewars.com/kata/5970fce80ed776b94000008b/train/javascript

// Fundamentals
// Strings

function lettersToNumbers(s) {
	// your code......
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		if (/[a-z]/.test(s[i])) {
			sum += s[i].charCodeAt(0) - 96;
		} else if (/[A-Z]/.test(s[i])) {
			sum += (s[i].charCodeAt(0) - 64) * 2;
		} else if (/[0-9]/.test(s[i])) {
			sum += s[i].charCodeAt(0) - 48;
		}
	}
	return sum;
}

function lettersToNumbers(s, i = 0) {
	// your code......
	if (i == s.length) return 0;

	if (/[a-z]/.test(s[i])) {
		return s[i].charCodeAt(0) - 96 + lettersToNumbers(s, i + 1);
	} else if (/[A-Z]/.test(s[i])) {
		return (s[i].charCodeAt(0) - 64) * 2 + lettersToNumbers(s, i + 1);
	} else if (/[0-9]/.test(s[i])) {
		return s[i].charCodeAt(0) - 48 + lettersToNumbers(s, i + 1);
	}
	return 0 + lettersToNumbers(s, (i += 1));
}



console.log(lettersToNumbers("Give me five!"), 110);

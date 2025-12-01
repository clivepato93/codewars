// counter solution maybe compare the letters available to the
const words = [
	"BILL","GAME"]
function longestWord(letters) {
	const res = [];
	const lC = {};
	for (let letter of letters) {
		lC[letter] = (lC[letter] || 0) + 1;
	}

	for (let w of words) {
		const lC2 = {};

		for (let letter of w) {
			lC2[letter] = (lC2[letter] || 0) + 1;
		}
		//     console.log(lC2);
		let pushWord = true;
		for (let letter in lC2) {
			if (lC[letter]==undefined|| lC2[letter] > lC[letter]) {
				pushWord = false;
				break;
			}
		}
		if (pushWord) {
			res.push(w);
		}
	}

	return res.length ? res : null;
}

console.log(longestWord("GQEMAUVXY"), ["GAME"]);

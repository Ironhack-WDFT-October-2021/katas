/*
https://www.codewars.com/kata/5412509bd436bd33920011bc
Usually when you buy something, you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
	let result = '';
	for (let i = 0; i < cc.length; i++) {
		if (i < cc.length - 4) {
			result += '#'
		} else {
			result += cc[i]
		}
	}
	return result
}

function maskify(cc) {
	if (cc.length < 4) return cc
	return '#'.repeat(cc.length - 4) + cc.slice(- 4)
}

// using padStart()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
function maskify(cc) {
	return cc.slice(-4).padStart(cc.length, '#');
}
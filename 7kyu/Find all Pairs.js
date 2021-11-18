/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
You are given array of integers, your task will be to pairs all pairs in that array and return their pairs.
Notes:
Array can be empty or contain only one value; in this case return 0
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

// sort first then check for the same consecutive numbers to find the pairs
function duplicates(array) {
	let pairs = 0;
	// sort the array
	array.sort((a, b) => a - b)
	for (let i = 0; i < array.length; i++) {
		// check current num with next num
		if (array[i] === array[i + 1]) {
			pairs++;
			// skip the next num
			i++
		}
	}
	return pairs;
}

// using an object to keep track of the pairs - we only iterate once over the array
function duplicates(array) {
	const list = {}
	let pairs = 0
	array.forEach(num => {
		if (list[num]) {
			delete list[num]
			pairs++
		} else {
			list[num] = 1
		}
	})
	return pairs
}

// same as above but with an array instead - for each number we check if that number
// is in the array - if not we put in in there, if it is we set it to undefined and 
// count a pair
function duplicates(array) {
	let double = []
	let pairs = 0
	array.forEach(num => {
		if (double[num] != num) {
			double[num] = num
		} else {
			double[num] = undefined
			pairs++
		}
	})
	return pairs
}
/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(text) {
	// filter out the duplicates
	const noDupes = [...new Set(text)]
	// map over this array and replace every char
	// with an array [<char>, <number of occurences in text>]

	const result = noDupes.map(function (char) {
		return [char, count(text, char)]
	})
	return result
}

// 
function count(str, char) {
	let counter = 0
	for (let el of str) {
		if (el === char) {
			counter++
		}
	}
	return counter
}
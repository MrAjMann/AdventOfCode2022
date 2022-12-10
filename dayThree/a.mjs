import { readFileSync } from "node:fs";

const lines = readFileSync("./dayThree/inputTest.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n");

// A rucksack which consits of two compartments
// split each rucksack in half to get the compartments
// filter duplicates from rucksackone and two then compare and filter dups from both

const bags = lines.map((line) => line);
const ruckSacks = bags.map((x) => x.split(","));
var duplicates = [];
ruckSacks.forEach((ruckSack) => {
	const ruckSackMiddle = Math.floor(ruckSack[0].length / 2);
	const ruckSackOne = ruckSack[0].slice(0, ruckSackMiddle).split("");
	const ruckSackTwo = ruckSack[0].slice(ruckSackMiddle).split("");

	var ruckSackOneLeftduplicates = ruckSackOne.reduce(function (
		left,
		el,
		i,
		arr
	) {
		if (arr.indexOf(el) === i && left.indexOf(el) < 0) left.push(el);
		return left;
	},
	[]);

	var ruckSackOneRightduplicates = ruckSackTwo.reduce(function (
		right,
		el,
		i,
		arr
	) {
		if (arr.indexOf(el) === i && right.indexOf(el) < 0) right.push(el);
		return right;
	},
	[]);

	var combinedSack = ruckSackOneLeftduplicates.concat(
		ruckSackOneRightduplicates
	);

	var combinedDuplicates = combinedSack.reduce(function (combined, el, i, arr) {
		if (arr.indexOf(el) !== i && combined.indexOf(el) < 0) combined.push(el);
		return combined;
	}, []);

	duplicates.push(combinedDuplicates);
	// console.log(combinedDuplicates);
});

// console.log(duplicates);

const sortDuplicates = duplicates.join().split(",");

const partOne = sortDuplicates
	.map((x) => {
		if (x == x.toUpperCase()) {
			return x.charCodeAt(0) - "A".charCodeAt(0) + 27;
		} else {
			return x.charCodeAt(0) - "a".charCodeAt(0) + 1;
		}
	})
	.reduce((a, b) => a + b, 0);

console.log(partOne);

// for (let x in sortDuplicates) {
// 	// x === lookUp;
// 	console.log(x);
// }

// partOne();
// function partTwo() {}

import { readFileSync } from "node:fs";

const lines = readFileSync("./dayFour/inputTest.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n")
	.map((line) => line.split(" "));

const partOne = lines.map(([columns]) => {
	const col = columns.split(",");
	return col;

	// console.log("c2", c2);
});
var leftLeft = [];
var leftRight = [];
var rightLeft = [];
var rightRight = [];

const value = partOne.map((c1) => {
	const leftLeftCol = c1[0];
	const leftRightCol = c1[0];
	leftLeft.push(leftLeftCol.split("-")[0]);
	leftRight.push(leftRightCol.split("-")[1]);
	let ranges = [leftLeft, leftRight];
	return ranges;
});
const valueTwo = partOne.map((c1) => {
	const rightLeftCol = c1[1];
	rightLeft.push(rightLeftCol.split("-")[0]);
	const rightRightCol = c1[1];
	rightRight.push(rightRightCol.split("-")[1]);
	let ranges = [rightLeft, rightRight];
	return ranges;
});

// console.log("left", left);
// console.log("right", right);
// for (const x of left) {
// 	if (x[0] < x[1])
// 	 x[0];
// }

function arrRangeLeft(min, max) {
	let left = [];

	for (let i = min; i <= max; i++) {
		left.push(i);
		console.log("i", i);
		console.log("min", min);
		console.log("max", max);
	}

	return left;
}
function arrRangeRight(min, max) {
	let right = [];
	for (let i = min; i < max; i++) right.push(i);

	return right;
}

// console.log(value[0][0]);
// console.log(valueTwo[0][0]);
for (let l of value[0][0]) {
	return 
	// console.log(l);
}
console.log("left", arrRangeLeft(value[0][0], value[0][1]));
console.log("right", arrRangeRight(valueTwo[0][0], valueTwo[0][1]));

// const range = (start, end, length = end - start + 1) =>
// 	Array.from({ length }, (_, i) => start + i);

// console.log(range(parseInt(left), parseInt(right)));

// for (i of range(left, right)) {
// 	console.log(i);
// }
// [start, ...range(start + 1, end)];
// function range(start, end) {
// 	if (start === end) return [start];
// 	console.log([start, ...range(start + 1, end)]);
// }

// range(left, right);
// console.log(partOne);

import { readFileSync } from "node:fs";

const lines = readFileSync("./dayFour/input.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n");

let count = 0;
const res = lines.map((line) => {
	const [left, right] = line
		.split(",")
		.map((intervel) => intervel.split("-").map(Number));

	if (
		(left[0] <= right[0] && right[1] <= left[1]) ||
		(right[0] <= left[0] && left[1] <= right[1])
	)
		return (count += 1);
});

console.log(count);

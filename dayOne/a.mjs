import { readFileSync } from "node:fs";

const elves = readFileSync("input.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n\n");

// Function day1 part 1

function countCal() {
	const calories = elves.map((elf) => {
		const calories = elf.split("\n").map(Number);

		return calories.reduce((previous, current) => previous + current, 0);
	});
	const total = calories.sort().slice(-3);
	console.log(total.reduce((prev, curr) => prev + curr, 0));
	// console.log(...total);
	// console.log(Math.max(...total));
}

countCal();

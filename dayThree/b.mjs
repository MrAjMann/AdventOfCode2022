import { readFileSync } from "node:fs";

const lines = readFileSync("./dayThree/inputTest.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n");

const ruckSackItems = lines.map((x) => [
	x.slice(0, x.length / 2),
	x.slice(Math.floor(x.length / 2)),
]);

const ruckSackDuplicates = ruckSackItems.map(
	([compartmentOne, compartmentTwo]) => {
		for (const item of compartmentOne) {
			if (compartmentTwo.includes(item)) {
				return item;
			}
		}
	}
);

const partOne = ruckSackDuplicates
	.map((x) => {
		if (x == x.toUpperCase()) {
			return x.charCodeAt(0) - "A".charCodeAt(0) + 27;
		} else {
			return x.charCodeAt(0) - "a".charCodeAt(0) + 1;
		}
	})
	.reduce((a, b) => a + b, 0);

console.log("partOne:", partOne);

const elfGroups = [];

for (let i = 0; i < lines.length; i += 3) {
	elfGroups.push([lines[i], lines[i + 1], lines[i + 2]]);
}
// console.log(elfGroups);

const groupCommons = elfGroups.map(([a, b, c]) => {
	for (const item of a) {
		if (b.includes(item) && c.includes(item)) {
			return item;
		}
	}
});

// console.log(groupCommons);

const partTwo = groupCommons
	.map((x) => {
		if (x == x.toUpperCase()) {
			return x.charCodeAt(0) - "A".charCodeAt(0) + 27;
		} else {
			return x.charCodeAt(0) - "a".charCodeAt(0) + 1;
		}
	})
	.reduce((a, b) => a + b, 0);

console.log("partTwo:", partTwo);

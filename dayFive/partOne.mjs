import { readFileSync } from "node:fs";

const lines = readFileSync("./dayFive/inputTest.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim();

const [stacks, moves] = lines.split("\n\n");
console.log(stacks.split("\n").map());

function partOne() {}

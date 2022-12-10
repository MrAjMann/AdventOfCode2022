import { readFileSync } from "node:fs";

const lines = readFileSync("./dayNum/inputTest.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n")
	.map((line) => line.split(" "));

function partOne() {}

function partTwo() {}

import { readFileSync } from "node:fs";

const lines = readFileSync("./dayTwo/input.txt", { encoding: "utf-8" }) // read the inputfile content
	.replace(/\r/g, "") //remove all \r characters to avoid issues on windows
	.trim()
	.split("\n")
	.map((line) => line.split(" "));

const moves = {
	rock: 1,
	paper: 2,
	scissors: 3,
};

const mapInput = {
	A: moves.rock,
	B: moves.paper,
	C: moves.scissors,
	X: moves.rock,
	Y: moves.paper,
	Z: moves.scissors,
};

function Score(opponentMove, ourMove) {
	// We Draw
	if (opponentMove === ourMove) {
		return ourMove + 3;
	}
	// We Win
	if (
		(opponentMove === moves.rock && ourMove === moves.paper) ||
		(opponentMove === moves.paper && ourMove === moves.scissors) ||
		(opponentMove === moves.scissors && ourMove === moves.rock)
	) {
		return ourMove + 6;
	}
	return ourMove;
}

function partOne() {
	const outcomes = lines.map((line) => {
		const opponentMove = mapInput[line[0]];
		const ourMove = mapInput[line[1]];

		return Score(opponentMove, ourMove);
	});
	console.log(outcomes.reduce((a, b) => a + b, 0));
}

partOne();

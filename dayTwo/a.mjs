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

const mapCompInput = {
	A: moves.rock,
	B: moves.paper,
	C: moves.scissors,
};

const playerInput = {
	X: 0,
	Y: 3,
	Z: 6,
};

// lost = 0
// draw = 3
// win = 6

function Score(ourMove, opponentMove) {
	// Draw
	if (ourMove === playerInput.Y) {
		// console.log("ourMove", ourMove);
		if (opponentMove === moves.rock) {
			// console.log("opponentMove", opponentMove);
			return ourMove + 1;
		}
		if (opponentMove === moves.paper) {
			return ourMove + 2;
		}
		if (opponentMove === moves.scissors) {
			return ourMove + 3;
		}
		return ourMove;
	}

	// Loss
	if (ourMove == playerInput.X) {
		// console.log("ourMove", ourMove);
		if (opponentMove == moves.rock) {
			// console.log("opponentMove", opponentMove);
			return ourMove + 3;
		}
		if (opponentMove == moves.paper) {
			// console.log("opponentMove", opponentMove);
			return ourMove + 1;
		}
		if (opponentMove == moves.scissors) {
			// console.log("opponentMove", opponentMove);
			return ourMove + 2;
		}
		return ourMove;
	}
	//Win
	if (ourMove == playerInput.Z) {
		if (opponentMove == moves.rock) {
			return ourMove + 2;
		}
		if (opponentMove == moves.paper) {
			return ourMove + 3;
		}
		if (opponentMove == moves.scissors) {
			return ourMove + 1;
		}
		return ourMove;
	}
}

function PartTwo() {
	const outcomes = lines.map((line) => {
		const opponentMove = mapCompInput[line[0]];
		const ourMove = playerInput[line[1]];

		return Score(ourMove, opponentMove);
	});

	// console.log(outcomes);
	console.log(outcomes.reduce((a, b) => a + b, 0));
}

PartTwo();

import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trim().toString().split("\n");

const possibleMoves = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

function part1(input) {
  const score = input.map((e) => possibleMoves[e]).reduce((a, b) => a + b, 0);
  return score;
}

console.log(part1(input));

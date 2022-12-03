import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trim().toString().split("\n");

function part1(input) {
  const moves = {
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
  const score = input.map((e) => moves[e]).reduce((a, b) => a + b, 0);
  return score;
}

function part2(input) {
  const moves = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };
  const score = input.map((e) => moves[e]).reduce((a, b) => a + b, 0)
  return score;
}

console.log(part1(input));
console.log(part2(input));

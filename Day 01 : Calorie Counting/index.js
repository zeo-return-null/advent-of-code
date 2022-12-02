import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput
  .trim()
  .split("\n\n")
  .map((e) => e.split("\n").map((n) => parseInt(n, 10)));

// First Part
function findLargestCount(input) {
  const largest = Math.max(
    ...input.map((e) => e.reduce((counter, n) => counter + n, 0))
  );
  return largest;
}

// Second Part
function findSumOfTopThreeLargestCount(input) {
  const topThree = input
    .map((e) => e.reduce((sum, n) => sum + n, 0))
    .sort((a, b) => b - a)
    .slice(0, 3);
  return topThree.reduce((a, b) => a + b, 0);
}

console.log(findLargestCount(input));
console.log(findSumOfTopThreeLargestCount(input));

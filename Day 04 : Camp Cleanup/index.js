import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trim().split("\n");

function part1(input) {
  let counter = 0;
  for (const line of input) {
    const [[pairA1, pairB1], [pairA2, pairB2]] = line
      .split(",")
      .map((elf) => elf.split("-").map(Number));

    if (
      (pairA1 <= pairA2 && pairB1 >= pairB2) ||
      (pairA1 >= pairA2 && pairB1 <= pairB2)
    ) {
      counter++;
    }
  }
  return counter;
}

function part2(input) {
  let counter = 0;
  for (const line of input) {
    const [[pairA1, pairB1], [pairA2, pairB2]] = line
      .split(",")
      .map((elf) => elf.split("-").map(Number));

    if (
      (pairA1 >= pairA2 && pairA1 <= pairB2) ||
      (pairA2 >= pairA1 && pairA2 <= pairB1)
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(part1(input));
console.log(part2(input));

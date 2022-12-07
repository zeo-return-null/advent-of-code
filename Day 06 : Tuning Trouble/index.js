import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

function part1(input) {
  let i;
  for (i = 4; i < input.length - 1; i++) {
    const chars = input.substring(i - 4, i).split('');
    const set = new Set(chars);
    if (set.size === 4) break;
  }
  return i;
}

function part2(input) {
  let i;
  for (i = 14; i < input.length - 1; i++) {
    const chars = input.substring(i - 14, i).split('');
    const set = new Set(chars);
    if (set.size === 14) break;
  }
  return i;
}

console.log(part1(rawInput));
console.log(part2(rawInput));
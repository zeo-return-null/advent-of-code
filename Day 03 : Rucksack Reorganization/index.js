import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trim().toString().split("\n");

function part1(input) {
  const splitItems = input
    .map((rucksack) => {
      const itemA = rucksack.substring(0, rucksack.length / 2);
      const itemB = rucksack.substring(rucksack.length / 2);
      for (const char in itemA.split("")) {
        if (itemB.includes(itemA[char])) {
          return itemA[char].match(/[A-Z]/)
            ? itemA[char].charCodeAt(0) - 38
            : itemA[char].charCodeAt(0) - 96;
        }
      }
      return 0;
    })
    .reduce((a, b) => a + b);
  return splitItems;
};

console.log(part1(input));

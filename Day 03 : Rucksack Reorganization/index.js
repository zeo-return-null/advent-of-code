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


function part2(input) {
  const elfPriorities = [];
  for (let i = 2; i < input.length; i += 3) {
    elfPriorities.push(
      input[i]
        .split("")
        .filter(
          (elf) =>
            input[i - 1].indexOf(elf) !== -1 && input[i - 2].indexOf(elf) !== -1
        )[0]
    );
  }
  const result = elfPriorities.reduce(
    (priority, char) =>
      priority + (char.charCodeAt(0) - (char.charCodeAt(0) >= 97 ? 96 : 38)),
    0
  );
  return result;
}

console.log(part1(input));
console.log(part2(input));


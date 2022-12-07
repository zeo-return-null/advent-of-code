import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

function getSequenceOfUniqueChars(input, seqSize) {
  let i;
  for (i = seqSize; i < input.length -1; i++) {
    const chars = input.substring(i - seqSize, i).split('');
    const set = new Set(chars);
    if (set.size === seqSize) break;
  }
  return i;
};

console.log("Part 1 : " + getSequenceOfUniqueChars(rawInput, 4));
console.log("Part 2 : " + getSequenceOfUniqueChars(rawInput, 14));

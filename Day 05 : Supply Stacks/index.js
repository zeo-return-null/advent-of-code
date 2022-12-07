import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trimEnd();

function resolution(input, part) {
  const [drawing, moves] = input.split("\n\n");
  const stacks = [];

  for (const line of drawing.split("\n").slice(0, -1)) {
    for (let i = 0; i < line.length; i += 4) {
      if (line[i + 1] !== " ") {
        stacks[i / 4] = stacks[i / 4] ?? [];
        stacks[i / 4].unshift(line[i + 1]);
      }
    }
  }
  for (const move of moves.split("\n")) {
    const [item, from, to] = move.match(/\d+/g).map(Number);
    const crates = stacks[from - 1].slice(-item);
    if (part === 1) {
      stacks[to - 1].push(...crates.reverse());
    } else {
      stacks[to - 1].push(...crates);
    }
    stacks[from - 1].length -= item;
  }
  console.log(stacks.map((stack) => stack[stack.length - 1]));
}

resolution(input, 1);
resolution(input, 2);

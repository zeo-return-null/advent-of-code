import fs from "fs";

const rawInput = fs.readFileSync("input.txt", { encoding: "utf-8" });

const input = rawInput.trimEnd();

function part1(input) {
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
    stacks[to - 1].push(...(crates.reverse()));
    stacks[from - 1].length -= item;
  }
  console.log(stacks.map((stack) => stack[stack.length - 1]));
}

part1(input);


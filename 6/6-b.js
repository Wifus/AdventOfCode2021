//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim().split(",").map(_ => parseInt(_))).flat();

let fish = file;

const days = 256;
const cycle = 6;

const fishes = Array(9).fill(0);

fish.forEach(_ => fishes[_]++);

for (let i = 0; i < days; i++) {
    const fishCopy = [...fishes];
    fishes[0] = fishCopy[1];
    fishes[1] = fishCopy[2];
    fishes[2] = fishCopy[3];
    fishes[3] = fishCopy[4];
    fishes[4] = fishCopy[5];
    fishes[5] = fishCopy[6];
    fishes[6] = fishCopy[7] + fishCopy[0];
    fishes[7] = fishCopy[8];
    fishes[8] = fishCopy[0];
}

const sum = fishes.reduce((acc, cur) => acc += cur);

console.log(sum);
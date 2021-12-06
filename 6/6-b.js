//@ts-check
const readFile = require("fs").readFileSync;
const initial = readFile("input", "utf-8").split(",").map(_ => parseInt(_));

const days = 256;
const cycle = 6;
const fishes = Array(cycle + 3).fill(0);

initial.forEach(_ => fishes[_]++);

for (let i = 0; i < days; i++) {
    const newFish = fishes[0];
    fishes.push(fishes.shift());    //Cycles array elements
    fishes[cycle] += newFish;
}

const sum = fishes.reduce((acc, cur) => acc += cur);

console.log(sum);
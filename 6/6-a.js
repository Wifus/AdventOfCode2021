//@ts-check
const readFile = require("fs").readFileSync;
let fish = readFile("input", "utf-8").split(",").map(_ => parseInt(_));

const days = 80;
const cycle = 6;

for (let i = 0; i < days; i++) {
    let newFish = [];
    fish = fish.map((v) => v == 0 ? (newFish.push(cycle + 2) * 0) + cycle : v - 1);
    fish.push(...newFish);
}

console.log(fish.length);
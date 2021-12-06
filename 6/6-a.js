//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim().split(",").map(_ => parseInt(_))).flat();

let fish = file;

const days = 80;
const cycle = 6;

for (let i = 0; i < days; i++) {
    let newFish = [];
    fish.forEach((v, i, arr) => {
        if (v == 0) {
            arr[i] = cycle;
            newFish.push(cycle + 2);
        } else {
            arr[i] = v - 1;
        }
    });
    fish.push(...newFish);
}

const sum = fish.length;

console.log(sum);
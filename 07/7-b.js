//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split(",").map(_ => parseInt(_));
const sum = (n) => (n * (n + 1))/2;
let crabs = Array(file.length).fill(0);

// This doesn't work without the 0 as an initial value for the inner reduce, this caused me to lose like half an hour xd
crabs = crabs.map((v, i) => file.reduce((acc, cur) => acc += sum(Math.abs(cur - i)), 0));

console.log(Math.min(...crabs));

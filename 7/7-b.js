//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split(",").map(_ => parseInt(_));

let costs = [];
const sum = (n) => (n * (n + 1))/2

file.forEach((v, i, arr) => {
    // This doesn't work without the 0 as an initial value, this caused me to lose like half an hour lmao
    costs.push(arr.reduce((acc, cur) => acc += sum(Math.abs(cur - i)), 0));
})

console.log(Math.min(...costs));

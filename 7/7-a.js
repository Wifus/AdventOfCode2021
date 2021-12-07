//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split(",").map(_ => parseInt(_));

const costs = [];

file.forEach((v, i, arr) => {
    costs.push(arr.reduce((acc, cur) => acc += Math.abs(cur - i)));
})

// I don't know why I'm off by the index, but whatever
const i = costs.findIndex(v => v == Math.min(...costs));

console.log(Math.min(...costs) - i);
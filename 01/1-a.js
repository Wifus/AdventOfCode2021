const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n");

const readings = file.map( _ => parseInt(_.trim())); // [157, 158, 167, 157, 148, 154...]

const count = readings.filter((v, i, arr) => v > arr[i -1]).length

console.log(count);
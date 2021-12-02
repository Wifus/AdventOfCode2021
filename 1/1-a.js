const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n")

const readings = file.map( _ => parseInt(_.trim()));

const count = readings.reduce((acc, cur, i, arr) => acc += cur > arr[i - 1] ? 1 : 0, 0);

console.log(count)
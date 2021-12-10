const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n");

const readings = file.map( _ => parseInt(_.trim()));

const count = readings
    .map((v, i, arr) => v + arr[i + 1] + arr[i + 2])
    .filter((v, i, arr) => v > arr[i -1]).length

console.log(count);
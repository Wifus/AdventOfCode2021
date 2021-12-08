//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.split("|").map(_ => _.trim().split(" ")));

function is1478(n) {
    return n == 2 || n == 4 || n == 3 || n == 7 ? 1 : 0;
}

console.log(file.reduce((acc, cur) => acc += cur[1].reduce((acc2, cur2) => acc2 += is1478(cur2.length), 0), 0));
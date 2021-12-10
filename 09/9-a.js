//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim().split("").map(_ => parseInt(_)));

console.log(file.reduce((acc, cur, i) => {
    return acc += cur.reduce((acc2, cur2, j) => {
        const around = [file[i]?.[j + 1] ?? Infinity, file[i]?.[j - 1] ?? Infinity, file[i + 1]?.[j] ?? Infinity, file[i - 1]?.[j] ?? Infinity];
        const isValley = around.every(_ => cur2 < _);
        return acc2 += isValley ? cur2 + 1 : 0;
    }, 0);
}, 0));
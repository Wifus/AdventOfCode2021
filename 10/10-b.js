//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const pairs = {
    "(" : ")",
    "{" : "}" ,
    "[" : "]",
    "<" : ">"
}
const points = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4
}
let invalid = [];

/**
 * 
 * @param {string} line 
 * @returns 
 */
function getIncompleteLine(line) {
    let stack = [];
    for(let char of line) {
        let pair = pairs[char];
        if (pair) stack.push(char);
        else {
            if (char != pairs[stack.pop()]) return [];
        }
    }

    if (stack.length > 0) {
        let remaining = [];
        for (let char of stack) {
            remaining.unshift(pairs[char]);
        }
        return remaining;
    }
    else return [];
}

for(let line of file) {
    if (getIncompleteLine(line)) invalid.push(getIncompleteLine(line));
}

invalid = invalid
    .filter(_ => _.length > 0)
    .map(_ => _.reduce((acc, cur) => acc = (acc * 5) + points[cur] , 0), 0)
    .sort((a, b) => a - b);

console.log(invalid[Math.floor(invalid.length/2)]);
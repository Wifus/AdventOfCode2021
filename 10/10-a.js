//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const pairs = {
    "(": ")",
    "{": "}" ,
    "[": "]",
    "<": ">"
}, points = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}, invalid = [];

/**@param {string} line*/
function getInvalidCharacter(line) {
    let stack = [];
    for(let char of line) {
        if (pairs[char]) stack.push(char);
        else if (char != pairs[stack.pop()]) return char;
    }
}

file.forEach(_ => invalid.push(getInvalidCharacter(_)));

console.log(invalid.reduce((acc, cur) => acc += points[cur] ?? 0, 0));
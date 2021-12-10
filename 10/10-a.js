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
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}
let invalid = [];

/**
 * 
 * @param {string} line 
 * @returns 
 */
function getInvalidCharacter(line) {
    let stack = [];
    for(let char of line) {
        let pair = pairs[char];
        if (pair) stack.push(char);
        else {
            if (char != pairs[stack.pop()]) return char;
        }
    }

    // if (stack.length > 0) return false;

    // return true;
}

for(let line of file) {
    invalid.push(getInvalidCharacter(line))
}


console.log(invalid.reduce((acc, cur) => acc += points[cur] ?? 0, 0));
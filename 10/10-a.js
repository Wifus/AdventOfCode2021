//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const pairs = {"(": ")", "{": "}" , "[": "]", "<": ">"}, 
      points = {")": 3, "]": 57, "}": 1197, ">": 25137};
let score = 0;

file.forEach(line => {
    const stack = [];
    for(const char of line) {
        if (pairs[char]) stack.push(char);
        else if (char != pairs[stack.pop()]) {score += points[char]; break;}
    }
});

console.log(score);
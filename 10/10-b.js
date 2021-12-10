//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const pairs = {"(" : ")", "{" : "}" , "[" : "]", "<" : ">"}, 
      points = {")": 1, "]": 2, "}": 3, ">": 4},
      closing = [];

file.forEach(line => {
    const stack = [];
    for(let char of line) {
        if (pairs[char]) stack.push(char);
        else if (char != pairs[stack.pop()]) return;
    }
    closing.push(stack.reduceRight((_, char) => _ * 5 + points[pairs[char]], 0));
});

console.log(closing.sort((a, b) => a - b)[Math.floor(closing.length/2)]);
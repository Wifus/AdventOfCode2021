//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const pairs = {"(" : ")", "{" : "}" , "[" : "]", "<" : ">"}, 
      points = {")": 1, "]": 2, "}": 3, ">": 4},
      closing = [];

/**@param {string} line*/
function getLineCompletion(line) {
    const stack = [];
    for(let char of line) {
        if (pairs[char]) stack.push(char);
        else if (char != pairs[stack.pop()]) return 0;
    }

    if (stack.length) return stack.reduceRight((_, char) => _ * 5 + points[pairs[char]], 0);
    else return 0;
}

file.forEach(line => {
    const score = getLineCompletion(line); 
    score && closing.push(score)
});

closing.sort((a, b) => a - b);
console.log(closing[Math.floor(closing.length/2)]);
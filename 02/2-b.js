const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n");

const directions = file.map( _ => _.trim().split(" ")); 

let x = 0;
let y = 0;
let aim = 0

for (const direction of directions) {

    const str = direction[0];
    
    if (str == "down") {
        aim += parseInt(direction[1]);
    } else if (str == "up") {
        aim -= parseInt(direction[1]);
    } else if (str == "forward") {
        x += parseInt(direction[1]);
        y += parseInt(direction[1]) * aim;
    }
}

console.log(x * y);
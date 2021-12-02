const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n");

const directions = file.map( _ => _.trim().split(" ")); 

let x = 0;
let y = 0;


// I used "in" insread of "of" and that cost me five minutes. Oh no
for (const direction of directions) {

    const str = direction[0];
    
    if (str == "down") {
        y += parseInt(direction[1]);
    } else if (str == "up") {
        y -= parseInt(direction[1]);
    } else if (str == "forward") {
        x += parseInt(direction[1]);
    }
}

console.log(x * y);
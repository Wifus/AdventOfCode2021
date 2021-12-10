//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

const size = Math.max(...file.map(_ => _.split(" -> ").map(_ => _.split(",").map(_ => parseInt(_))).flat()).flat()) + 1;

/**
 * @param {string} str 
 */
function parseLine(str) {
    const [[x1,y1],[x2,y2]] = str.split(" -> ").map(_ => _.split(",").map(_ => parseInt(_)));

    return {x1,y1,x2,y2};
}

const lines = file.map(_ => parseLine(_));

/**@type {number[][]} */
const map = [...Array(size)].map(_ => Array(size).fill(0));

for (const line of lines) {
    const {x1, x2, y1, y2} = line;
    const diffY = y2 - y1;
    const diffX = x2 - x1
    const slope = diffY/diffX;

    if (slope == 0) {
        for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
            map[y1][i]++;
        }
    } else if (slope == Infinity || slope == -Infinity) {
        for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
            map[i][x1]++;
        }
    } else {
        const signY = Math.sign(diffY);
        const signX = Math.sign(diffX);
        console.log(slope, line);

        for (let i = 0; i <= Math.abs(x1 - x2); i++) {
            if (slope == -1) map[Math.max(y1, y2) - i][Math.min(x1, x2) + i]++;
            else map[Math.min(y1, y2) + i][Math.min(x1, x2) + i]++;
        } 
    }
}

// /**
//  * @param {*[]} map 
//  */
// function printMap(map) {
//     for (const row of map) console.log(...row);
// }

// printMap(map);
const critical = map.reduce((acc, cur) => acc += cur.reduce((acc, cur) => acc += cur >= 2 ? 1 : 0, 0), 0);

console.log(`\n${critical}`);
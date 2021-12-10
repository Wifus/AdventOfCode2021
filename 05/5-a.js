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
    if (x1 == x2) {
        if (y1 > y2) {
            for (let i = y2; i <= y1; i++) {
                map[i][x1]++;
            }
        } else {
            for (let i = y1; i <= y2; i++) {
                map[i][x1]++;
            }
        }
    } else if (y1 == y2) {
        if (x1 > x2) {
            for (let i = x2; i <= x1; i++) {
                map[y1][i]++;
            }
        } else {
            for (let i = x1; i <= x2; i++) {
                map[y1][i]++;
            }
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
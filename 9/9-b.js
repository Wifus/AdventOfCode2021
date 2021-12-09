//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim().split("").map(_ => parseInt(_)));

/**@type {number[][]} */
let lowPoints = [];

file.forEach((row, i) => {
    row.forEach((v, j) => {
        const around = [file[i]?.[j + 1] ?? Infinity, file[i]?.[j - 1] ?? Infinity, file[i + 1]?.[j] ?? Infinity, file[i - 1]?.[j] ?? Infinity];
        const isValley = around.every(_ => v < _);
        if (isValley) lowPoints.push([i,j]);
    })
});

/**
 * @param {number[][]} arr 
 * @param {number[]} point 
 * @returns 
 */
const hasPoint = (arr, point) => arr.some(_ => _.every((v, i) => v == point[i]));;
let basins = [];

lowPoints.forEach(loc => {
    let size = 1;
    let points = [loc];
    let newPointCount = 1;

    while (newPointCount != 0) {
        /**@type {number[][]} */
        let newPoints = [];
        points.forEach(pos => {
            const i = pos[0], j = pos[1];
            if (!hasPoint(points, [i, j + 1]) && !hasPoint(newPoints, [i, j + 1]) && file[i]?.[j + 1] < 9) newPoints.push([i, j + 1]);
            if (!hasPoint(points, [i, j - 1]) && !hasPoint(newPoints, [i, j - 1]) && file[i]?.[j - 1] < 9) newPoints.push([i, j - 1]);
            if (!hasPoint(points, [i + 1, j]) && !hasPoint(newPoints, [i + 1, j]) && file[i + 1]?.[j] < 9) newPoints.push([i + 1, j]);
            if (!hasPoint(points, [i - 1, j]) && !hasPoint(newPoints, [i - 1, j]) && file[i - 1]?.[j] < 9) newPoints.push([i - 1, j]);
        });
        points.push(...newPoints);
        size += (newPointCount = newPoints.length);
    }

    basins.push(size);
})

basins.sort((a, b) => a -b);
basins = basins.splice(-3, 3);

console.log(basins.reduce((acc, cur) => acc *= cur, 1));
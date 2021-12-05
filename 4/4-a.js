//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

const data = file.filter(_ => _ != "");
const draws = data.shift().split(",").map(_ => parseInt(_));
const boardData = data.map(_ => _.split(new RegExp(" +")).map(_ => parseInt(_)));
let boards = [];

while (boardData.length > 0) {
    let board = [];
    for (let i = 0; i < 5; i++) board.push(boardData.shift());
    boards.push(board);
}

/**
 * @param {number[][]} board 
 * @param {number} num
 */
const toggleNumber = (board, num) => board.map(_ => _.map(_ => _ = _ == num ? null : _));

/**@param {number[][]} board */
function checkBoard(board) {
    const horizontalWins = board.some(_ => _.every(_ => _ == null));
    const verticalWins = board.map((_,i) => board.map(_ => _[i])).some(_ => _.every(_ => _ == null));
    return horizontalWins || verticalWins;
}

let winner = 0;
let lastdraw = 0;
for (const draw of draws) {
    boards = boards.map(_ => toggleNumber(_, draw));
    if (boards.some((_, i) => checkBoard(_) && (winner = i) && (lastdraw = draw))) break;
}

const sum = boards[winner].reduce((acc, cur) => acc += cur.reduce((acc, cur) => acc += cur), 0);

console.log(sum * lastdraw);
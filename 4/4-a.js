//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

const data = file.filter(_ => _ != "");
const draws = data.shift().split(",").map(_ => parseInt(_));
let boards = [];

let boardCount = 0;
while (data.length > 0) {
    let board = [];
    for (let i = 0; i < 5; i++) {
        board.push(data.shift().split(new RegExp(" +")).map(_ => parseInt(_)));
    }
    boards.push(board);
    boardCount++;
}


/**
 * 
 * @param {number[][]} board 
 * @param {number} num
 */
function toggleNumber(board, num) {
    return board.map(_ => _.map(_ => _ = _ == num ? null : _));
}

/**
 * 
 * @param {number[][]} board 
 */
function checkBoard(board) {
    //Check horizontal
    let temp = board.map(_ => _.filter(_ => _ !== null).length);
    for (const row of temp) if (row == 0) return true;

    //Veritcal
    let temp2 = [[],[],[],[],[],]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            temp2[j][i] = board[i][j]
        }
    }
    let temp3 = temp2.map(_ => _.filter(_ => _ !== null).length);
    for (const row of temp3) if (row == 0) return true;

    //Diagonal
    // let temp4 = [[],[]]
    // for (let i = 0; i < 5; i++) {
    //     temp4[0].push(board[i][i]);
    //     temp4[1].push(board[4 - i][i]);
    // }
    // let temp5 = temp4.map(_ => _.filter(_ => _ !== null).length);
    // for (const row of temp5) if (row == 0) return true;

    return false
}

let winner;
let lastdraw;
for (const draw of draws) {
    let done = false;
    for (const i in boards) {
        boards[i] = toggleNumber(boards[i], draw);
    }
    for (const j in boards) {
        if (checkBoard(boards[j])) {
            done = true;
            winner = parseInt(j);
            lastdraw = draw;
        }
    }

    if(done) break;
}

let sum = boards[winner].reduce((acc, cur) => acc += cur.reduce((acc, cur) => acc += cur), 0);

console.log(sum * lastdraw);
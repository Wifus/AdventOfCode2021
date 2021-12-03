//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map( _ => _.trim());

const bitsets = file.map(_ => parseInt(_, 2));

const testBit = (num, pos) => (num & 1 << pos) != 0;
const getBit = (num, pos) => (num & (1 << pos)) === 0 ? 0 : 1;
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} k 
 * @returns 
 */
const compareKthBit = (num1, num2, k) => !testBit(num1 ^ num2, k);

/**
 * @param {number[]} arr
 * @param {number} k
 */
function isMostCommonBitSet(arr, k) {
    return arr.filter(bits => testBit(bits, k)).length < arr.length/2
}


const bitlen = file[0].length;
let o2, co2;

let copy = bitsets;
for (let i = bitlen - 1; i >= 0; i--) {
    const isSet = isMostCommonBitSet(copy, i) ? 1 : 0;
    copy = copy.filter((v) => compareKthBit(v, isSet << i, i));
    if (copy.length == 1) {
        o2 = copy[0];
        break;
    }
}

copy = bitsets;
for (let i = bitlen - 1; i >= 0; i--) {
    const isSet = isMostCommonBitSet(copy, i) ? 0 : 1;
    copy = copy.filter((v) => compareKthBit(v, isSet << i, i));
    if (copy.length == 1) {
        co2 = copy[0];
        break;
    }
}

console.log(o2, co2); //1184 2526
console.log(o2 * co2); //2990784
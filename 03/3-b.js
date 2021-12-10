//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

const bitsets = file.map(_ => parseInt(_, 2));
const BITLEN = file[0].length;

let data = [bitsets, bitsets];  //Two copies of array to be able to filter for both highest and lowest at same time

for (let i = BITLEN - 1; i >= 0; i--) {
    if (data[0].length > 1) {
        /**
         * 1. Filter the array (don't save the filtered array) to only have numbers who's ith bit is set
         * 2. If the length of the filtered array is greater than half of that of the orginal array then the most common state in this position is set (else contrapositive)
         * 3. Filter the array (and save the filtered array) to only have numbers whose ith bit is in the same state as most of those the original array 
         */
        const isSet = data[0].filter(bits => bits >> i & 1).length < data[0].length/2 ? 0 : 1;
        data[0] = data[0].filter((v) => (v >> i & 1) == isSet);
    }
    if (data[1].length > 1) {
        // The same as above but the result of the test for the most common state is reversed 
        const isSet = data[1].filter(bits => bits >> i & 1).length < data[1].length/2 ? 1 : 0;
        data[1] = data[1].filter((v) => (v >> i & 1) == isSet);
    }
}

const [[o2], [co2]] = data;

console.log(`O2 Generator Rating:\t${o2} - ${o2 == 2526 ? "✔" : "✖"}`);
console.log(`CO2 Scrubber Rating:\t${co2} - ${co2 == 1184 ? "✔" : "✖"}`);
console.log(`Life support rating:\t${o2 * co2} - ${o2 * co2 == 2990784 ? "✔" : "✖"}`);
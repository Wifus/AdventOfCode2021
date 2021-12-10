//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

const bitsets = file.map(_ => parseInt(_, 2));
const BITLEN = file[0].length;

let gamma = 0, epsilon  = 0;

for (let i = BITLEN - 1; i >= 0; i--) {
    const isSet = bitsets.filter(bits => bits >> i & 1).length < bitsets.length/2 ? 0 : 1;
    gamma |= (isSet << i);
    epsilon |= (1 - isSet << i);
}

console.log(`Gamma Rate:\t\t${gamma} - ${gamma == 2663 ? "✔" : "✖"}`);
console.log(`Epsilon Rate:\t\t${epsilon} - ${epsilon == 1432 ? "✔" : "✖"}`);
console.log(`Power Consumption:\t${gamma * epsilon} - ${gamma * epsilon == 3813416 ? "✔" : "✖"}`);
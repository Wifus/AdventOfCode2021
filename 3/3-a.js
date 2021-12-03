const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n");

const readings = file.map( _ => _.trim());

const bitlen = readings[0].length;
const bitsets = readings.map(_ => parseInt(_, 2));

const buckets = []

const testBit = (num, pos) => (num & 1 << pos) != 0;
const setBit = (num, pos) => num | (1 << pos);

bitsets.forEach(bits => {
    for (let i = 0; i < bitlen; i++) {
        if (!buckets[i]) buckets[i] = 0;
        buckets[i] += testBit(bits, i);
    }
});

let first = 0;
let second = 0;

for (bit in buckets) {
    if (buckets[bit] > readings.length/2) {
        first = setBit(first, bit)
    }
    else {
        second = setBit(second, bit)
    }
}


console.log(first, second); //2663 1432
console.log(first * second); //3813416
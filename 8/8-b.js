//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());
const displays = [];

class Display {
    /**@type {string[]} */
    unknowns;
    /**@type {string[]} */
    output;
    /**@type {string[]} */
    knowns;


    /**@param {string} data */
    constructor(data) {
        const split = data.split("|").map(_ => _.trim());
        this.unknowns = split[0].split(" ").map(_ => _.split("").sort().join(""));
        this.output = split[1].split(" ").map(_ => _.split("").sort().join(""));
        this.knowns = Array(10).fill(null);
        console.log(this.unknowns, this.output, this.knowns);
        this.solve();
        console.log(this.unknowns, this.output, this.knowns);
        console.log("===========================");
    }

    solve() {
        // 1
        for(const str of this.unknowns) if (str.length == 2) {this.makeKnown(str, 1); console.log(1);}
        // 7
        for(const str of this.unknowns) if (str.length == 3) {this.makeKnown(str, 7); console.log(7);}
        // 4
        for(const str of this.unknowns) if (str.length == 4) {this.makeKnown(str, 4); console.log(4);}
        // 8
        for(const str of this.unknowns) if (str.length == 7) {this.makeKnown(str, 8); console.log(8);}
        // 3
        for(const str of this.unknowns) if (str.length == 5 && this.hasAllOf(this.knowns[1], str)) {this.makeKnown(str, 3); console.log(3);}
        // 9
        for(const str of this.unknowns) if (this.hasAllOf(this.knowns[4], str)) {this.makeKnown(str, 9); console.log(9);}
        // 0
        for(const str of this.unknowns) if (str.length == 6 && this.hasAllOf(this.knowns[7], str)) {this.makeKnown(str, 0); console.log(0);}
        // 5
        for(const str of this.unknowns) if (str.length == 5 && this.hasAllOf(str, this.knowns[9])) {this.makeKnown(str, 5); console.log(5);}
        // 6
        for(const str of this.unknowns) if (str.length == 6) {this.makeKnown(str, 6); console.log(6);}

        // 2
        // for(const str of this.unknowns) if (str.length == 5) {this.makeKnown(str, 2); console.log(2);}
        
        this.makeKnown(this.unknowns[0], 2);
        console.log(2);
    }

    /**
     * @param {string} str 
     * @param {number} num 
     */
    makeKnown(str, num) {
        if (this.knowns[num]) {
            console.log(`${str} is overwriting ${this.knowns[num]}`);
            console.log(this.unknowns, this.output, this.knowns);
        }
        this.knowns[num] = str;
        this.unknowns.splice(this.unknowns.indexOf(str), 1);
    }

    /**
     * @param {string} mask 
     * @param {string} test 
     */
    hasAllOf(mask, test) {
        console.log(mask, test);
        return mask.split("").every(char => test.includes(char));
    }

    /**@returns {number}*/
    value() {
        return this.output.reduce((acc, v, i) => acc += this.knowns.indexOf(v) * Math.pow(10, this.output.length - 1 - i), 0);
    }
}

console.log(file.reduce((acc, data) => acc += new Display(data).value(), 0));
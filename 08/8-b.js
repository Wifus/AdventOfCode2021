//@ts-check
const readFile = require("fs").readFileSync;
const file = readFile("input", "utf-8").split("\n").map(_ => _.trim());

// [[unknowns, output, knowns]]
const displays = file.map(line => {
    const data = line.split(" | ").map(list => {
        return list.split(" ").map(segments => segments.split("").sort().join(""));
    });
    data.push(Array(10).fill(""));
    return data;
});

const isSubsetOf = (mask, test) => mask.split("").every(char => test.includes(char));
const makeKnown = (data, str, num) => {
    data[2][num] = str;
    data[0].splice(data[0].indexOf(str), 1);
}

const getValue = (data) => {
    /*1*/for(const str of data[0]) if (str.length == 2) makeKnown(data, str, 1);
    /*7*/for(const str of data[0]) if (str.length == 3) makeKnown(data, str, 7);
    /*4*/for(const str of data[0]) if (str.length == 4) makeKnown(data, str, 4);
    /*8*/for(const str of data[0]) if (str.length == 7) makeKnown(data, str, 8);
    /*3*/for(const str of data[0]) if (str.length == 5 && isSubsetOf(data[2][1], str)) makeKnown(data, str, 3);
    /*9*/for(const str of data[0]) if (isSubsetOf(data[2][4], str)) makeKnown(data, str, 9);
    /*0*/for(const str of data[0]) if (str.length == 6 && isSubsetOf(data[2][7], str)) makeKnown(data, str, 0);
    /*5*/for(const str of data[0]) if (str.length == 5 && isSubsetOf(str, data[2][9])) makeKnown(data, str, 5);
    /*6*/for(const str of data[0]) if (str.length == 6) makeKnown(data, str, 6);
    /*2*/makeKnown(data, data[0][0], 2);
    return data[1].reduce((acc, v, i) => acc += data[2].indexOf(v) * Math.pow(10, data[1].length - 1 - i), 0)
}

console.log(displays.reduce((acc, data) => acc += getValue(data), 0));
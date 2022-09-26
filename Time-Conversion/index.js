'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
let AMoPM = s.slice(-2)
let hour = Number(s.slice(0,-2).split(':')[0]);
let answer = hour < 12 && AMoPM === 'PM' ? 
s.replace('0' + hour.toString(),(hour + 12).toString()).replace('PM', "") : 
AMoPM === 'AM' && hour === 12 ? 
s.replace(hour.toString(),"00").s.replace('AM', "") : false;
console.log(answer)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
timeConversion('07:05:45PM')
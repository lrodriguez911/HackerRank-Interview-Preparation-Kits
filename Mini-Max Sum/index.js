'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let arrOrd = arr.sort((a,b) => b - a)
    let minSum = arrOrd.filter(a => a !== arrOrd[4])
    .reduce((a,b) =>a + b ,0)
    let maxSum = arrOrd.filter(a => a !== arrOrd[0])
    .reduce((a,b) =>a + b,0)

arrOrd[0] === arrOrd[4] && arrOrd[0] > 0 ? 
console.log(arrOrd[0] * 4,arrOrd[0] * 4): 
console.log(minSum, maxSum)
}
//add funcition to sum
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
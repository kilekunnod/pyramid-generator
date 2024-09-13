const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber); // returns character, rowNumber times

  //code that comes after return statements do not run, they stop the execution of any code inside a function or block after them
  // that's why this console.log statement below was greyed out
}

// TODO: Use a different kind of loop
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count))
    } else {
        rows.push(padRow(i, count))
    }
} 

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// "false" is a truthy value, meaning, when evaluated as a Boolean, it's considered true
// examples of falsy values are "", 0, null, undefined, false, and NaN
// "true" is a falsy value, meaning, when evaluated as a Boolean, it's considered false
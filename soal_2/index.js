const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let numFamilies = 0;
let members = [];

rl.question("Input the number of families: ", (num) => {
numFamilies = parseInt(num);
rl.question("Input the number of members in the family (separated by a space): ", (input) => {
members = input.split(" ").map(num => parseInt(num));
if (members.length !== numFamilies) {
console.log("Input must be equal with count of family");
} else {
let numBuses = 0;
let groups = new Map();
for (let i = 0; i < members.length; i++) {
if (members[i] > 4) {
console.log("Family cannot fit in one bus");
rl.close();
return;
}
if (!groups.has(members[i])) {
groups.set(members[i], 0);
}
groups.set(members[i], groups.get(members[i]) + 1);
}
let numTwoFamily = Math.ceil(groups.get(2) / 2);
numBuses += numTwoFamily;
groups.delete(2);
for (let [key, value] of groups) {
numBuses += Math.ceil(value / 2);
}
console.log("Minimum bus required is: " + numBuses);
}
rl.close();
});
});
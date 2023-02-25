function procVowel(param) {
const vowels = "aeiou";
let result = "";
for (let i = 0; i < param.length; i++) {
if (vowels.includes(param[i])) {
result += param[i];
}
}
return result;
}

function procConsonant(param) {
const consonants = "bcdfghjklmnpqrstvwxyz";
let result = "";
for (let i = 0; i < param.length; i++) {
if (consonants.includes(param[i])) {
result += param[i];
}
}
return result;
}

function sortCharacters(param) {
let result = "";
let vowels = "";
let consonants = "";
for (let i = 0; i < param.length; i++) {
if (param[i] !== " ") {
if ("aeiou".includes(param[i])) {
vowels += param[i];
} else {
consonants += param[i];
}
result += param[i];
}
}
return "Vowel Characters : " + vowels.toLowerCase() + "\nConsonant Characters : " + consonants.toLowerCase();
}

let input = "Sample Case";
console.log(sortCharacters(input));

input = "Next Case";
console.log(sortCharacters(input));
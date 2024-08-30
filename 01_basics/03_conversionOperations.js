let score = "12a"

console.log(typeof score);
let newValue = Number(score)
console.log(typeof newValue);
console.log(newValue);


// "33" => 33
// "33a" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// "" => false
// "VV" => true
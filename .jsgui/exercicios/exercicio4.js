prompt = require("prompt-sync")();

let x = parseFloat( prompt("Digite a temperatura em C° que deseja transformar para F°:"))

let F = x * 9/5 + 32

console.log("A temperatura em F° é " + F + ".")

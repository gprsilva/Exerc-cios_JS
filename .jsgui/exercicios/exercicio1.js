prompt = require("prompt-sync")();

let x = parseFloat( prompt("Digite o primeiro número que deseja somar:"))
let y = parseFloat(prompt("Digite o segundo número que deseja somar:"))

let soma = x + y

console.log("A soma de " + x + " e " + y + " é " + soma +".")
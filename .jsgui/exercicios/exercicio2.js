prompt = require("prompt-sync")();

let ano_nascimento = parseInt( prompt("Digite o ano em que nasceu:"))

let anoatual = new Date().getFullYear()

let idade = anoatual - ano_nascimento

console.log("Sua idade é " + idade)
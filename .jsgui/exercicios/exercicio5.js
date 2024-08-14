prompt = require("prompt-sync")();

let produto = prompt("Qual é o produto que deseja comprar ?")
let preço = parseFloat(prompt("Qual é o preço unitário do produto que deseja comprar ?"))
let quantidade = parseInt(prompt("Quantas unidades deseja comprar ?"))

let preço_total = preço * quantidade * 1.18

console.log("Este(a) "+ produto +", cujo valor unitário é "+ preço +"R$ e que teve "+ quantidade +"peça(s) pedida(s), saíra no valor de " + preço_total+"R$.");
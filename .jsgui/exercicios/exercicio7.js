prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Qual é o valor total da compra?"))
let parcelas= parseInt(prompt("Qual é o número de parelas ?"))


    let preço_parcelas = valor / parcelas

    console.log("O valor de "+ valor +"R$ com o número de parcelas de "+ parcelas +", saíra no valor de " + preço_parcelas+"R$ cada parcela.");

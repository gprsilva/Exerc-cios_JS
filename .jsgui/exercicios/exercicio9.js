prompt = require("prompt-sync")();

let nome =prompt("Digite seu nome:  ");
let total = parseFloat(prompt("Qual o valor total da compra?  "));
let parc = parseInt(prompt("Quantas parcelas? "));
let taxa = parseFloat(prompt("Valor da taxa mensal? "));
var valParc = total/parc;
console.log(nome+" o valor total é de "+total+" R$ fez em "+parc+" parcelas, com um juros de "+taxa+"% por parcela, que cada parcela fica com um valor de: ");

for(let contador = 0; contador < parc; contador++) {
    
    let valTaxa =(taxa/100)*valParc;
      valParc = valParc + valTaxa;
    let final = valParc.toFixed(2);
    console.log(final);
    
    }
prompt = require("prompt-sync")();

let hora = parseInt(prompt("Quantas horas você trabalhou na semana ?"))
let valor_hora = parseFloat(prompt("Qual é o valor da hora trabalhada ?"))

    let sala_semanal = hora * valor_hora
    let sala_mensal = sala_semanal * 4

    console.log("O seu salário semanal é "+ sala_semanal +"R$ e o seu salário mensal é "+ sala_mensal +"R$.");

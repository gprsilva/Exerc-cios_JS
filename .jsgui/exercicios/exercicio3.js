prompt = require("prompt-sync")();

let x = parseFloat( prompt("Digite o primeiro número que deseja subtrair:"))
let y = parseFloat(prompt("Digite o segundo número que deseja subtrair:"))

if (x > y){
    let dife = x - y
    console.log("A diferença de " + x + " e " + y + " é " + dife +".")
}

else {
    let dife = y - x
    console.log("A diferença de " + y + " e " + x + " é " + dife +".")
}

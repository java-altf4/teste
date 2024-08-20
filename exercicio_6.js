const readline = require('readline-sync');

// Gera um numero aleatorio entre 0 e 100
const numeroMagico = Math.floor(Math.random() * 101);
let tentativa;
let tentativas = 0;

// Loop para solicitar palpites ate que o usuario acerte o numero magico
do {
    tentativa = readline.question("Qual e o numero magico? ");
    tentativas++;

    if (tentativa < numeroMagico) {
        console.log("O numero magico e maior.");
    } else if (tentativa > numeroMagico) {
        console.log("O numero magico e menor.");
    } else {
        console.log("Parabens! Voce acertou o numero magico.");
    }
} while (tentativa !== numeroMagico);

// Classifica o usuario com base no numero de tentativas
if (tentativas <= 3) {
    console.log("Muito sortudo!");
} else if (tentativas <= 6) {
    console.log("Sortudo!");
} else if (tentativas <= 10) {
    console.log("Normal...");
} else {
    console.log("Tente novamente.");
}
return;
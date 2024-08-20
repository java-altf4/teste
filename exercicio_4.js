const readline = require('readline-sync');

// Solicita ao usuário que insira um número inteiro
const numero = readline.question("Digite um numero inteiro: ");

// Verifica se o número é par ou ímpar usando o operador % (módulo)
if (numero % 2 === 0) {
    console.log(`O numero ${numero} é par.`);
} else {
    console.log(`O numero ${numero} é impar.`);
}
return;
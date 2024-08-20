const readline = require('readline-sync');
let maior
let num1;
let num2;
let num3;
// Solicita ao usuário que insira três valores numéricos
 num1 = (readline.question("Digite o primeiro valor: "));
 num2 = (readline.question("Digite o segundo valor: "));
 num3 = (readline.question("Digite o terceiro valor: "));

// Inicializa a variável para armazenar o maior número
 maior = num1;

// Compara os valores e encontra o maior
if (num2 > maior) {
    maior = num2;
}
if (num3 > maior) {
    maior = num3;
}

// Exibe o maior número
console.log(`O maior número digitado é: ${maior}`);

return;
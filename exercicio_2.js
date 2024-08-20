const readlineSync = require('readline-sync');

// Definir o ano atual
const ANO_ATUAL = 2024;
let anoNascimento;
let idade;
// Ler o ano de nascimento da pessoa
 anoNascimento = readlineSync.question('Informe o ano de seu nascimento: ');

// Calcular a idade da pessoa
 idade = ANO_ATUAL - anoNascimento;

// Verificar se a pessoa pode iniciar a preparação para dirigir
if (idade >= 18) {
    console.log("Você tem " + idade , "anos. Já pode iniciar a preparação para dirigir.");
} else {
    console.log("Você tem " + idade, "anos. Ainda não pode iniciar a preparação para dirigir.");
}
return;

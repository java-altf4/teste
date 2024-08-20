const readline = require('readline-sync');
let idade;
let tempoServico;
let podeAposentar;

// Solicita ao usuario que insira a idade e o tempo de serviço
idade = readline.question("Digite a sua idade: ");
tempoServico = readline.question("Digite o tempo de servico em anos: ");

// Verifica se o trabalhador pode se aposentar
podeAposentar = idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25);

if (podeAposentar) {
    console.log("Voce pode se aposentar.");
} else {
    console.log("Voce nao pode se aposentar.");
}
return;
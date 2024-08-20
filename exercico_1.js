const readlineSync = require('readline-sync');

// Definição das constantes
const percentualRevendedor = 0.28;  // 28% para o revendedor
const percentualImpostos = 0.45;    // 45% de impostos
const precos = []; // Array para armazenar os custos de fabricação informados

// Definição das variáveis
let custoFabricacao;
let valorRevendedor;
let valorImpostos;
let valorFinal;
let resultado;

// Função para calcular o preço final do automóvel
function calcularPrecoFinal(custoFabricacao) {
    valorRevendedor = custoFabricacao * percentualRevendedor;
    valorImpostos = custoFabricacao * percentualImpostos;
    valorFinal = custoFabricacao + valorRevendedor + valorImpostos;

    resultado = {
        valorRevendedor: valorRevendedor.toFixed(2),
        valorImpostos: valorImpostos.toFixed(2),
        valorFinal: valorFinal.toFixed(2)
    };

    return resultado;
}

// Entrada de múltiplos custos de fabricação
do {
    custoFabricacao = readlineSync.question('Informe o custo de fabricacao do carro (ou digite "sair" para encerrar): ');
    if (custoFabricacao.toLowerCase() !== 'sair') {
        precos.push(parseFloat(custoFabricacao));
    }
} while (custoFabricacao.toLowerCase() !== 'sair');

// Processar e exibir resultados para cada preço informado
precos ((custo, index) => {
    resultado = calcularPrecoFinal(custo);
    console.log(`\nCarro ${index + 1}:`);
    console.log(`Custo de fabricação: R$ ${custo.toFixed(2)}`);
    console.log(`Valor atribuído ao revendedor: R$ ${resultado.valorRevendedor}`);
    console.log(`Valor dos impostos: R$ ${resultado.valorImpostos}`);
    console.log(`Valor final do automóvel ao consumidor: R$ ${resultado.valorFinal}`);
});
return;
/*Exercício
1 – No repositório de atividades, crie uma pasta atividade1 e crie o
arquivo variaveisOperadores.js
2 – Faça a declaração de 2 variáveis numéricas para cada operador
e guarde o resultado da operação em uma terceira variável;
3 – Para cada resultado obtido, imprima o texto “Resultado da
{operação} entre {num_A} e {num_B}” */

let num_A = 2;
let num_B = 3.0;
let num_C;

num_C = num_A + num_B;
console.log(`Resultado da adição entre ${num_A} e ${num_B} é ${num_C}`);

num_C = num_A - num_B;
console.log(`Resultado da subtração entre ${num_A} e ${num_B} é ${num_C}`);

num_C = num_A * num_B;
console.log(`Resultado da multiplicação entre ${num_A} e ${num_B} é ${num_C}`);

num_C = num_A / num_B;
console.log(`Resultado da divisão entre ${num_A} e ${num_B} é ${num_C}`);
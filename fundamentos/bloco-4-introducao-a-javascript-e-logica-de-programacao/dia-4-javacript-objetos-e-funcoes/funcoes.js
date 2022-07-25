/* Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. */

/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function modulo(a, b){
    return a % b;
}

console.log("Utilizando o número (5) para todos os parâmetros.");

console.log(`Soma: ${soma(5, 5)}
Subtração: ${subtracao(5, 5)}
Multiplicação: ${multiplicacao(5, 5)}
Divisão: ${divisao(5, 5)}
Módulo: ${modulo(5, 5)}`);
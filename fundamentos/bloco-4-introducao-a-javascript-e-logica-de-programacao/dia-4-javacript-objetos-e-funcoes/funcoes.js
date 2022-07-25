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

/* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

function maiorNumero(a, b){
    if(a > b){
        return `${a} é maior que ${b}`;
    } else {
        return `${b} é maior que ${a}`;
    }
}

console.log(maiorNumero(5, 10));
console.log(maiorNumero(20, 15));

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

function maiorDeTres(a, b, c){
    if(a > b && a > c){
        return `${a} é maior que ${b} e ${c}`
    } else if (b > a & b > c){
        return `${b} é maior que ${a} e ${c}`
    } else {
        return `${c} é maior que ${a} e ${b}`
    }
}

console.log(maiorDeTres(5, 10, 15));
console.log(maiorDeTres(10, 20, 15));
console.log(maiorDeTres(25, 15, 10));

/* 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero". */

function positiveOrNegative(x){
    if(x > 0){
        return `${x} é positivo!`
    } else if (x < 0){
        return `${x} é negativo!`
    } else {
        return `${x} é igual a ZERO!`
    }
}

console.log(positiveOrNegative(5));
console.log(positiveOrNegative(-5));
console.log(positiveOrNegative(0));

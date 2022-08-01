/* 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. */

const valor1 = 4;
const valor2 = 12;
const valor3 = 10;

let eImpar = false;

if (valor1 % 2 !== 0 || valor2 % 2 !== 0 || valor3 % 2 !== 0){
    eImpar = true;
} 

console.log(eImpar);
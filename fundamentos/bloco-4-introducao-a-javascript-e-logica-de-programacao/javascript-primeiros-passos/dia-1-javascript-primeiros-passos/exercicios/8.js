/* 8 - 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const valor1 = 5;
const valor2 = 11;
const valor3 = 7;

let ePar = false;

if (valor1 % 2 === 0 || valor2 % 2 === 0 || valor3 % 2 === 0){
    ePar = true;
} 

console.log(ePar);
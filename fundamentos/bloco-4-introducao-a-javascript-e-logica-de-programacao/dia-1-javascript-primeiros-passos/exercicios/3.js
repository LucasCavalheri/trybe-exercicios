// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valor1 = 10;
const valor2 = 20;
const valor3 = 30;


if (valor1 > valor2 && valor1 > valor3){
    console.log(valor1);
} else if (valor2 > valor1 && valor2 > valor3){
    console.log(valor2)
} else {
    console.log(valor3);
}
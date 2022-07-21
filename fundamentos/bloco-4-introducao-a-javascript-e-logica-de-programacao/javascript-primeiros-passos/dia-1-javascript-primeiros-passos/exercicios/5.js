// 5 - 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const valor1 = -21;
const valor2 = -3;
const valor3 = -4;
const soma = valor1 + valor2 + valor3;

if(soma === 180 && soma > 0){
    console.log(true);
} else {
    console.log(false);
}
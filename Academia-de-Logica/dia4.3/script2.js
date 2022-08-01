/* 2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
---------------- */

let arrayImpar = [];

for(let i = 1; i <= 50; i += 1){
    if(i % 2 !== 0){
        arrayImpar.push(i);
    }
}

console.table(arrayImpar) // No lugar do LOG, coloca table //
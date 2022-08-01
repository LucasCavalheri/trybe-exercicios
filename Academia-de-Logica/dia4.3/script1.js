/* 1. Encontre o index através do valor de um elemento
Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array contendo um conjunto de números
 - O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.
Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array" */

let array = [43, 213, 12, 54, 64, 234, 69, 23, 9, 11];
let valor = 23;


let valorNaoEncontrado = 0;
for(let i = 0; i < array.length; i += 1){
    if(array[i] === valor){
        console.log(array.indexOf(valor))
        valorNaoEncontrado += 1;
    }
    
}
if(valorNaoEncontrado === 0){
    console.log("Elemento não encontrado no array");
 }






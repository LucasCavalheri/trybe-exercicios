/* 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X. */

let soma = 0;
for(let index = 1; index <= 50; index += 1){
    soma += index;
}

console.log("A soma de 1 a 50 é:", soma);

/* 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta. */

let numeros = 0;
for(let index = 2; index <= 150; index += 1){
    if(index % 3 === 0){
        numeros += 1;
    } 
}

if(numeros === 50){
    console.log("O bolo é uma mentira");
}

/* 3 - Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova. */


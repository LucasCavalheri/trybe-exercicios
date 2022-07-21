// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for(let i = 0; i < numbers.length; i++){
    soma = soma + numbers[i];
}

console.log(`A soma de todos os números é de: ${soma}`);


// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
// (A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.)

let soma2 = 0;
for(let i = 0; i < numbers.length; i++){
    soma2 = soma2 + numbers[i];
}

let mediaAritmetica = soma2 / numbers.length
console.log(`A média aritmética total é de: ${mediaAritmetica}`);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

if(mediaAritmetica > 20){
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20.');
}

// 5 -  Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = -999;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maior){
        maior = numbers[i];
    }
}

console.log(`O maior número é: ${maior}`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        numerosImpares++;
    } 
}

console.log(`Existem ${numerosImpares} números ímpares.`);

if(numerosImpares === 0){
    console.log('Nenhum valor ímpar encontrado');
}
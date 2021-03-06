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

let maior = numbers[0];

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

if(numerosImpares === 0){
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(`Existem ${numerosImpares} números ímpares.`);
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}

console.log(`O menor número é: ${menor}`);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = []
for(let i = 1; i < 26; i++){
    numeros.push(i);
}

console.log(numeros)
// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for(let i = 0; i < numeros.length; i++){
    console.log(`Divisão do número ${numeros[i]} por 2: ${numeros[i] / 2}`);
}
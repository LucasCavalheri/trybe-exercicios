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

console.log(soma);


// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
// (A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.)

let soma2 = 0;
for(let i = 0; i < numbers.length; i++){
    soma2 = soma2 + numbers[i];
}

console.log(`A média aritmética total é de: ${soma2 / numbers.length}`);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 
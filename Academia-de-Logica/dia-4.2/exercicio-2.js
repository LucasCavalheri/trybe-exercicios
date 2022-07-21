/* Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
 em seu site, vamos ajudá-la escrevendo um algoritmo.
Ele recebe os seguintes dados:
 - age: número maior que 0
 - sex: M ou F
 - weight: Em (kg) com número maior que 0
 - height: Em (cm) com número maior que 0
A fórmula para homens:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:
-----------------------------------
"A taxa metabólica basal é: x Kcal"
----------------------------------- */
let taxaMetabolica;
let age = 21;
let sex = 'M';
let weight = 56;
let height = 167;

if(sex === 'M' && age > 0 && weight > 0 && height > 0){
    taxaMetabolica = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
} else if (sex === 'F' && age > 0 && weight > 0 && height > 0){
    taxaMetabolica = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
} else {
    console.log("Informe um dado válido.");
}

console.log("A taxa metábolica basal é: " + taxaMetabolica + ' Kcal');
/* 3. Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo
deve receber antes de criar essa sequência, o valor inicial e final.
Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:
Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------
Caso o contrário:
--------------------------
"Sequência muito pequena."
-------------------------- */

let valoresDivisiveisPorTres = 0;
for(let i = 0; i <= 300; i += 2){
    if(i % 3 === 0){
        valoresDivisiveisPorTres += 1;
    }
}

if(valoresDivisiveisPorTres >= 50){
    console.log("Há 50 ou mais números diviseis por 3");
} else {
    console.log("Sequência muito pequena.");
}
/* 1. Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
--------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade"
-------------------------------------------------- */

let lucasCavalheri = 21;
let elisabeteMartins = 40;
let lorenaPontes = 28;

if(lucasCavalheri < elisabeteMartins && lucasCavalheri < lorenaPontes){
    console.log('Lucas Cavalheri é a pessoa mais jovem e possui ' + lucasCavalheri + ' anos de idade.');
} else if (elisabeteMartins < lucasCavalheri && elisabeteMartins < lorenaPontes){
    console.log('Elisabete Martins é a pessoa mais jovem e possui ' + elisaveteMartins + ' anos de de idade.');
} else {
    console.log('Lorena Pontes é a pessoa mais jovem e possui ' + lorenaPontes + ' anos de idade.');
}
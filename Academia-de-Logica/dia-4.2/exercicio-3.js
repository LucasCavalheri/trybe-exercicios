/* 3. Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam
 escolher qual lanche maravilhoso irão pedir.
Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo 
 e imprima no terminal a mensagem de acordo com a opção escolhida.
Tabela:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção inexistente, imprima no terminal:
-----------------------------------
"Ainda não possuímos esta opção :("
----------------------------------- */

let escolha = 125;

switch(escolha){
    case 1:
        console.log('1 - Trybe Lanche Feliz');
        break;
    case 2:
        console.log('2 - McTrybe');
        break;
    case 3:
        console.log('3 - TrybeWooper');
        break;
    case 4:
        console.log('4 - X-Trybe');
        break;
    case 5:
        console.log('5 - Triple Trybe com JS');
        break;
    default:
        console.log("Ainda não possuímos esta opção :(");
}
let num1 = prompt("Informe o 1º Valor. ");
let num2 = prompt("Digite o 2º valor.");
let num3 = 7;
let multi = num1 * num2;
let soma = Number (num1) + Number(num2);
let sub = soma - num3;
let divisao = multi / num2;
let base = num1;
let expoente = num2;
console.log("Soma: " + soma);

soma = soma - 1;
console.log("Prova Real: " + divisao);
console.log("multiplicação: " + multi);
console.log("Subtração: " + sub);
console.log("Valores utilizados para as expressoes : " + num1 + " e " + num2);
//Utilizando a classe matematia para fazer o calculo de potencia, onde é passado 2  parametros, sendo eles a base e o expoente... que np caso são os valores de num1 num2
const resultado = Math.pow(base, expoente);
console.log("Potencia é : " + resultado);
let num1 = 2;
let num2 = 5;
let num3 = 7;
let multi = num1 * num2;
let soma = num1 + num2;
let sub = soma - num3;
let divisao = multi / num2;
let base = num1;
let expoente = num2;
console.log("Soma: " + soma);
console.log("Prova Real: " + divisao);

soma = soma - 1;

console.log("multiplicação: " + multi);
console.log("Subtração: " + sub);
console.log("Valores utilizados para as expressoes : " + num1 + " e " + num2);
//Utilizando a classe matematia para fazer o calculo de potencia, onde é passado 2  parametros, sendo eles a base e o expoente... que np caso são os valores de num1 num2
const resultado = Math.pow(base, expoente);
console.log("Potencia é : " + resultado);


var nome =  prompt("Digite seu nome");

document.write("1. Seja bem vindo,"+" " +nome + "<br>");

var numero = prompt("Seu nome é " + nome +  " Digite um número");

document.write("2. Você digitou o número" + " " + numero + '<br>');

var valor1 = (numero == 20);

console.log (valor1);

numero = parseInt(numero);

document.write ("3. O retorno da comparação booleana é:" + " " + valor1 + "<br>");

var valor2 = (numero + 20);

console.log (valor2);

document.write ("4. A soma dos valores é igual a:" + " " + valor2 + "<br>");

var valor3 = (numero - 20);

console.log (valor3);

document.write ("5. A subtração dos valores é igual a:" + " " + valor3 + "<br>")

var valor4 = (numero % 20);

console.log (valor4);

document.write ("6. O resto da divisão é igual a:" + " " + valor4 + "<br>")

var valor5 = (numero * numero);

console.log (valor5);

document.write ("7. O quadrado do número digitado é igual a:" + " " + valor5 + "<br>");
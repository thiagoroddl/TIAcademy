var nome =  prompt("Por favor, digite seu nome");

document.write("1. Seja bem vindo,"+" " +nome + "<br>");

var numero = prompt("Seu nome é " + nome + ", Agora digite um número");

document.write("2. Você digitou o número" + " " + numero + '<br>');

console.log(typeof(numero));

alert("Foi enviado uma " +typeof(numero) + "!");

var valor1 = (numero == numero);

alert ("A string será convertida para Number!");

console.log (typeof(numero));

var numero = parseInt(numero);

document.write ("3. O retorno da comparação booleana é:" + " " + valor1 + "<br>");

var valor2 = (numero + numero);

console.log (valor2);

document.write ("4. A soma dos valores é igual a:" + " " + valor2 + "<br>");

var valor3 = (numero - numero);

console.log (valor3);

document.write ("5. A subtração dos valores é igual a:" + " " + valor3 + "<br>")

var valor4 = (numero % numero);

console.log (valor4);

document.write ("6. O resto da divisão é igual a:" + " " + valor4 + "<br>")

var valor5 = (numero * numero);

console.log (valor5);

document.write ("7. O quadrado do número digitado é igual a:" + " " + valor5 + "<br>");

var fruta = prompt("Agora digite sua fruta favorita: Maça, Laranja, Abacaxi, Uva ou Manga ");
switch(fruta){
   
    case "Maça":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Laranja":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Abacaxi":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Uva":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Manga":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    default:
        document.write("ERRO, a fruta digitada não está entre as opções! " + fruta + " disponível no momento! :/ ");
    break;
}
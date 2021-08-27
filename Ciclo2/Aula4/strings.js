/*var nome ="Thiago";

console.log(nome.length);
console.log(nome[0]); //T
*/

/*match()
faz uma busca detro de uma string
existem alguns parâmetros de pesquisa que permite uma maior procura

*/
var palavras= "Maça doce";


//console.log( palavras.match(/D/gi) ); //g global e i pra ignorar se é maiscula ou miníscula

/*search()
procura pela ocorrencia e retornando a posição
*/

//console.log(palavras.search(/d/gi));

/*replace()
substitui uma string por outra
*/
/*
var str= "Lorem ipsum dolor sit amet consectetut";
 var mudarStr = str.replace(/e/gi, 'X');

 console.log(mudarStr);*/ /*
 var comp1 ="Comparar";										
 var comp2 ="comparar";

 var c1=comp1.toLowerCase();
 var c2= comp2.toLowerCase();

 //nsole.log(`Este é o c1: ${c1} Este é o c2: ${c2}
/*
var comparacao =c1.localeCompare(c2);
console.log(comparacao);*/
//
/*TRIM()
FAZ A REMOÇÀO DE ESPAÇOS ANTES E DEPOIS DA STRING
*/

var p = '   fpalavra+  ';

var r = p.trim();
console.log(r)
var s= r.replace(/f/gi,'');
console.log(s);
suba = s. replace('+', '');
console.log(`Removido: ${suba}`);

//toLocalString
//formataçõ de moedas

var valor = 1.357;
var formatarMoeda = valor.toLocaleString('pt-BR',{
    style: 'currency',
    currency:'BRL'
}) 

console.log(formatarMoeda)
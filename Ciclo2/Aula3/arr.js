/*Junta os elementos de 
dois ou mais e retorna 
uma cópia com os elementos juntos
*/

var frutas= ["Uva", "Banana", "Amora", "Melão"]
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2= ["Maça", "Pera", "Laranja"];


var todas = frutas.concat(frutas2);
console.log(frutas);
console.log(todas);

/*indexof procura por um elemento 
específico no array e retorna a 
sua posiçao*/

var retornoIndexof = todas.indexOf("Amora");
console.log(retornoIndexof);

/* join junta todos os elementos em string*/

var stringdearray= todas.join();
console.log(stringdearray);

/*push insere um novo elemento no final da lista */

var outralista = ["Bola", "Peteca"];
var novalista = outralista.push("Boneca", "Qualquer brinquedo");
console.log(novalista);
console.log(outralista);
console.log(outralista[3])

/*pop vai remover o ultimo elemento*/

console.log(outralista.pop())
console.log(outralista);

/*reverse inverte a ordem*/
console.log(outralista.reverse())

/* shift remove o primeiro elemento*/
var removerprimeiro = ["fusca", "variante"];
removerprimeiro.shift();
console.log(removerprimeiro);

/*sort ordena em ordem cresecente*/

var alfa = ["4","6","9","2"];
alfa.sort();
console.log(alfa);

/*tostring converte em strig mesma coisa que o join*/
/*unshift insere um novo elemento no início do array*/

alfa.unshift(10);
console.log(alfa);

/*splice corta o array em um ponto, elimina
a partir de um ponto */

var f= ["Uva", "Banana", "Amora", "Melão"]

console.log(f.splice(2, 1));


// arrays de objetos

var dados =[
            {nome: "Thiago"},
            {nome:"Rodrigo"} 

            ]

//console.log(dados[0].nome)
//console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0],
		cpf: doc[1]
	}
}

var pessoa2 = new Pessoa2("Rodrigo"," ", " ",['22','555']);
//console.log("Nome "+ pessoa2.nome+ " "+pessoa.doc.rg);
console.log(`Nome ${pessoa2.nome} cpf: ${pessoa2.doc.cpf}`);





/*

var / let const

*/
/*var nome= "thiago"; // var global
let sobrenome = "rodrigues";

if(true){
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobrenome "+ sobrenome)
	let sn = "De Lima"
	console.log(sobrenome);

}
console.log("Meu nome é "+nm+ " "+sobrenome+" "+sn);
console.log("Var nome= "+ nm);
a let nao apaece se eu comentar o console log aqui porque ela está no esscopo e não é global
a var é global então eu posso comentar o console fora do escopo
*/

var Pessoa = {
	nome: "Thiago",
	rua: "Rua abc",
	ncasa: "777", 
	dados: function(){
		document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>")
	}
}

Pessoa.dados();

/*console.log("Nome "+pessoa.nome+
	" Endereço "+ pessoa.rua+" N."+pessoa.ncasa);*/
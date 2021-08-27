function soma(){
	var x= 1;
	var y= 2;
	console.log (x+y);
}

//soma();

function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

function mult(n, o){
	var result = n * o;
	console.log(result);
}

function pot(n ,o){
	var result = Math.pow(n, o);
	console.log(result);
}

mult(3, 4);
pot(7, 2);


//somaPar(4, 9);

/*(function respostaF(){
	var nome= "Thiago"
	alert(nome);
	return nome;
}) ();*/

/*var f = function(){
	alert("Função sem nome");
}*/
//f();
//var d = respostaF()

//()=> é uma função que não se escreve o nome

//var ar = ()=>{ alert("ArFunc")}
//ar();


//( ()=>{ alert("ArFunc")} ) ();
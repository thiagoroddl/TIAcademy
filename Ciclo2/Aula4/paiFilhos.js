/*querySelector vai selecional o primeiro elemento
de uma lista de elementos de uma determinada classe.

o querySelectorAll irá retornar uma lista dos elementos, todos os elementos.
*/

window.onload=function(){

	/*const pai= document.querySelectorAll("#pai");


	pai.forEach((pegarFilhas)=>{

		pegarFilhas.addEventListener('click',(filha)=>{
			alert(filha.target.textContent);
		})
	});
*/
const btn = document.querySelector("#btn");
const outroPai = document.querySelector("#outroPai");
btn.addEventListener("click",()=>{

	li = document.createElement("li");
	outroPai.appendChild(li).textContent="Elemento Filho"; 
})

}
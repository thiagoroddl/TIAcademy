/*click Ao clicar em algum elemento HTML
mousemove Ao mover o cursor do mouse acessa (entra) o elemento
mouseover Ao mover o cursor do mouse dentro do elemento
mouseout Ao mover o cursos para fora do elemento
dblclick Ao efetuar do duplo click sobre o elemento
blur Ao perder o foco do elemento
*/

//ON CLICK EVENTO

window.onload = function(){
	const btn1 = document.querySelector(".btn-click");
	const legP = document.querySelector(".legenda");
    const cxTexto = document.querySelector("#texto");

    /*click ao clicar em algum elemento html*/

    btn1.addEventListener("click", ()=>{  
    	//escrever no elemento
    	legP.innerHTML+= cxTexto.value;
    });

}

btn1.addEventListener("click", ()=>{          
    legP.innerHTML=" ";

});

/*legP.addEventListener("mouseout", ()=>{
    });*/

    /*TROCAR TIPO DO ELEMENTO*/

	const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");

    trocaSenha.addEventListener("click", ()=>{
    //getAttribute()pegar o tipo do elemento
    //setAttribute()atribuir um tipo ao elemento

    if(cxSenha.getAttribute("type") == "password"){
        cxSenha.setAttribute("type", "text")
    } else {
        cxSenha.setAttribute("type", "password")
    }    
    });

    // alterar backgroud

     const cxTrocaBg = document.querySelector("#cxTbg");

     cxTrocaBg.addEventListener("blur", ()=>{
     cxTrocaBg.setAttribute("class", ".corBg");
 });
     //Somar valores

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spanResultado = document.querySelector("#resultado");

btnSomar.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number(cx1) + Number(cx2);

        spanResultado.innerHTML = r;
    });

	//EVENTO MODAL

	const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
    
    btnModal.addEventListener("click", ()=>{
    janelaM.setAttribute("class", "modal"); 
    });

    
    closeMod.addEventListener("click", ()=>{
        janelaM.classList.remove("modal");

    });


window.onload = function( ){

    const btnBuscaCep = document.querySelector("#btnBuscaCep");
    const cxCep = document.querySelector(".cxCep");

    const dadosCep = async function(cepUrl){// "async" para poder aguardar chamadas        
        var url =`https://viacep.com.br/ws/${cepUrl}/json/`; // armazena o endereço do via cep e vai como variavel o cep que devemos buscar, no caso "ws/${cep}/json/" no caso cep é os número a serem buscados

        var consultaCep = await fetch(url); // <--- await vinculado a async ?!? / Fetch( ); promessa de reposição e retorno de dados!

        var dadosCep    = await consultaCep.json();// retorno json
        //console.log(dadosCep);
        
        for(var campos in dadosCep){ // pega todos atributos do dadosCep
            console.log(campos);
            if(document.querySelector("#"+campos)){
            document.querySelector("#"+campos).value = dadosCep[campos]// comparação por aqui
            }
        }
    }

    btnBuscaCep.addEventListener("click", ()=>{
        let cep = cxCep.value; // armazena o valor do cep
        //console.log(url);    
        dadosCep(cep);
    })
} 
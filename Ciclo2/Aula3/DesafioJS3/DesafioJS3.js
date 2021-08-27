window.onload =()=>{

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnR = document.querySelector("#soma");
    const Resultado = document.querySelector("#resultado");

btnR.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var cx3 = Resultado.value;
        var r = Number(cx1) + Number(cx2);

        var correto = r == cx3
            if(correto){
                alert("Está correto!");
            } else{
                alert("Está errado!")
            }
        });

};
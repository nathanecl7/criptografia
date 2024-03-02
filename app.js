let entradaTexto=document.getElementById("textoDigitado");
let codificar=document.getElementById("botaoCodifica");
let descodificar=document.getElementById("botaoDescodifica");
let resultado=document.getElementById("saidaTexto");
let botaoCopia= document.getElementById ("copiar");

function criptografa(){
    let textoCriptografado = entradaTexto.value;
    let resultadoTexto=textoCriptografado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")
    resultado.value=resultadoTexto;
    
    document.getElementById("semClick").style.display="none"
    document.getElementById("aviso1").style.display="none"
    document.getElementById("aviso2").style.display="none"
    document.getElementById("copiar").style.display="show"
    document.getElementById("copiar").style.display="inherit"
    document.getElementById("saidaTexto").style.display="show"
    document.getElementById("saidaTexto").style.display="inherit"
}
codificar.onclick=criptografa;

function descriptografa(){
    let textoDescriptografado = entradaTexto.value;
    let resultadoTexto=textoDescriptografado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")
    resultado.value=resultadoTexto;
    
    document.getElementById("semClick").style.display="none"
    document.getElementById("aviso1").style.display="none"
    document.getElementById("aviso2").style.display="none"
    document.getElementById("copiar").style.display="show"
    document.getElementById("copiar").style.display="inherit"
    document.getElementById("saidaTexto").style.display="show"
    document.getElementById("saidaTexto").style.display="inherit"
}
descodificar.onclick=descriptografa;

function copy () {
    if (resultado.value !=="") {
        resultado.select();
        resultado.setSelectionRange (0,99999999);
        navigator.clipboard.writeText(resultado.value);

        alert (resultado.value + "foi copiado!");

    }
}

botaoCopia.onclick=copy;
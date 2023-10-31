
var SetaEsquerda = window.document.getElementById("Seta-esquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("Seta-direita")

function RolarParaDireita () {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    SetaDireita.style = "display:none" 
    SetaEsquerda.style = "display:flex; margin-top:55px"   
    }


function RolarParaEsquerda () {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:=none"
    SetaDireita.style = "display:flex; margin-top:55px" 
}

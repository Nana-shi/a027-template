//1 - 
let texto = document.getElementById("paragrafo")
console.log(texto.innerHTML)

//2-
function imprimirTextoDigitado(){
    let textoDoInput = document.getElementById("texto")
    console.log(textoDoInput.value)
}

//3-
function mudarElementoP(){
    texto.innerHTML = document.getElementById("texto").value
}
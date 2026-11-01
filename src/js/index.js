

// function exibirMensagem(){
//     return "Minha mensagem"
// }

// console.log(exibirMensagem())


// const saudacao = () => {
//     return "mensagem 2"
// }

// console.log(saudacao())

// const soma = (a,b) => {
//     return parseInt(a) + parseInt(b)
// }

// alert(soma(
//     prompt("numero 1: "), 
//     prompt("numero 2: ")
// ))



// function calcularAreaTriangulo() {
//     let base
//     let altura

//     let area = (base * altura) / 2
// };


// linkar botoes com funções
import { chamarFormatarMoeda } from "./converter_moeda.js"
import { chamarCalcularACirculo } from "./calcular_circulo.js"
import { chamarCalcularAretangulo } from "./calcular_retangulo.js"
import { chamarCalcularATriangulo } from "./calcular_triangulo.js"

    const btnMoeda = document.getElementById("btn_converter_moeda")
    btnMoeda.addEventListener("click", chamarFormatarMoeda)

    const btnCirculo = document.getElementById("btn_calcular_circulo")
    btnCirculo.addEventListener("click", chamarCalcularACirculo)

    const btnRetangulo = document.getElementById("btn_calcular_retangulo")
    btnRetangulo.addEventListener("click", chamarCalcularAretangulo)

    const btnTriangulo = document.getElementById("btn_calcular_triangulo")
    btnTriangulo.addEventListener("click", chamarCalcularATriangulo)
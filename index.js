

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

// arrow function calcular area do triangulo
const calcularATriangulo = (a, b) => {
    return (parseFloat(a) * parseFloat(b)) / 2
}

alert (calcularATriangulo(
    prompt("Base:"),
    prompt("Altura:")
))

// arrow function calcular area do circulo
const calcularACirculo = (a) => {
    let raio = parseFloat(a)
    const pi = 3.1415
    let area = pi * (raio * raio)

    return (
        area
    )
}

alert(calcularACirculo(
    prompt("Raio:")
))


// const formatarMoeda = (a) => {
//     let valor = parseFloat(a)
//     return (
//         `R$ ${valor}`
//     )
// }

// alert (formatarMoeda(
//         prompt("Valor:")
//     ))
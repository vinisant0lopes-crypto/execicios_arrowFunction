// arrow function calcular area do triangulo
const calcularATriangulo = (a, b) => {
    return (parseFloat(a) * parseFloat(b)) / 2
}
const chamarCalcularATriangulo = () => {
    let base = prompt("Base:")
    let altura = prompt("Altura:")
    let area = calcularATriangulo(base, altura)
    alert(area)
}

export { chamarCalcularATriangulo }
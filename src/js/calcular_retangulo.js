const calcularAretangulo = (a, b) => {
    return parseFloat(a) * parseFloat(b)
}
const chamarCalcularAretangulo = () => {
    let base = prompt("Base:")
    let altura = prompt("Altura:")
    let area = calcularAretangulo(base, altura)
    alert(area)
}


export { chamarCalcularAretangulo }
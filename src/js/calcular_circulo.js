
// arrow function calcular area do circulo
const calcularACirculo = (a) => {
    let raio = parseFloat(a)
    const pi = 3.1415
    let area = pi * (raio * raio)

    return (
        area
    )
}
const chamarCalcularACirculo = () => {
    let raio = prompt("Raio:")
    let area = calcularACirculo(raio)
    alert(area)
}


export { chamarCalcularACirculo }
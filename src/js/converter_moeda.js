

/**
 tolocaleString pt-br é usado para formatar o número como moeda brasileira
 ex:
 ao inserir 10, ele se tornará R$ 10,00
 ao inserir 1000, ele se tornará R$ 1.000,00
**/

const formatarMoeda = (valor) => {
    const valorNumerico = parseFloat(valor) // mantém o valor como número, para evitar problemas com vírgula e ponto e problemas com calculos.

    let valorFormatado = valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // formata o valor como moeda brasileira para exibir na tela
    return valorFormatado
}
const chamarFormatarMoeda = () => {
    let valor = prompt("Valor:")
    let valorFormatado = formatarMoeda(valor)
    alert(valorFormatado)
}


export { chamarFormatarMoeda }
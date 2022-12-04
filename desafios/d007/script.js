let cotacaoDolar = window.prompt('Antes de mais nada, informe a cotação do dólar na data de hoje:')

let botao = document.querySelector('.botao')

let conversao = document.querySelector('.conversao')

botao.addEventListener('click', converter, false)

function converter() {
    let reais = Number(window.prompt('Quantos R$ você tem?:'))

    let dolares = reais / cotacaoDolar

    conversao.innerHTML = `Você tem ${reais.toLocaleString("pt-BR", {
        style: "currency", currency: "BRL",})} que, convertido em dólares, dará ${dolares.toLocaleString("pt-BR", {style: "currency", currency: "USD",})}`

}

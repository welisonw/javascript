let botao = document.querySelector('.botao')
let calculo = document.querySelector('.calculo')

botao.addEventListener('click', calcular)

function calcular() {
    let a = Number(prompt('Informe o valor de A:'))
    let b = Number(prompt('Informe o valor de B:'))
    let c = Number(prompt('Informe o valor de C:'))
    let resultado = b * b - 4 * a * c

    calculo.innerHTML = `<p>A equação atual é: <strong>${a}x² + ${b}x + ${c} = 0</strong>.</p>`
    calculo.innerHTML += `<p>O cálculo realizado será: <strong>∆ = ${b}² - 4 . ${a} . ${c}</strong>.</p>`
    calculo.innerHTML += `<p>O valor calculado foi <strong><mark>∆ = ${resultado}</mark></strong>.</p>`
}



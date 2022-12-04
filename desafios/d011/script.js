let botao = document.querySelector('.botao')
let verificacao = document.querySelector('.verificacao')

botao.addEventListener('click', verificar)

function verificar() {
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))

    verificacao.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`

    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        verificacao.innerHTML += `<p>O ano de ${ano} <strong><mark style="background-color: lime; color: darkgreen;">É BISSEXTO!</mark></strong> &#x2705</p>`
    } else {
        verificacao.innerHTML += `<p>O ano de ${ano} <strong>
            <mark style="background-color: lightcoral; color: darkred;">NÃO É BISSEXTO!</mark></strong> &#x274C</p>`
    }

}

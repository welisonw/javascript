let botao = document.querySelector('.botao')
let verificacao = document.querySelector('.verificacao')

botao.addEventListener('click', analise)

function analise() {
    let precoAnterior = Number(prompt('Qual era o preço anterior do produto?'))
    let precoAtual = Number(prompt('Qual é o preço atual do produto?'))
    let precoAumentou = precoAtual - precoAnterior
    let precoDiminuiu = precoAnterior - precoAtual
    let variacaoCima = precoAumentou * 100 / precoAnterior
    let variacaoBaixo = precoDiminuiu * 100 / precoAtual

    verificacao.innerHTML = `<h1>Analisando os valores informados...</h1>`
    verificacao.innerHTML += `<p>O produto custava <strong>${precoAnterior.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong>. Agora custa <strong>${precoAtual.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong>.</p>`

    if (precoAtual > precoAnterior) {
        verificacao.innerHTML += `<p>Hoje o produto <strong>está mais caro</strong>.</p>`
        verificacao.innerHTML += `<p>O preço subiu <strong>${precoAumentou.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong> em relação ao preço anterior.</p>`
        verificacao.innerHTML += `<p>Uma variação de <strong>${variacaoCima.toFixed(2).replace(".", ",")}%</strong> para cima.</p>`
    } else {
        verificacao.innerHTML += `<p>Hoje o produto <strong>está mais barato</strong>.</p>`
        verificacao.innerHTML += `<p>O preço caiu <strong>${precoDiminuiu.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong> em relação ao preço anterior.</p>`
        verificacao.innerHTML += `<p>Uma variação de <strong>${variacaoBaixo.toFixed(2).replace(".", ",")}%</strong> para baixo.</p>`
    }



}

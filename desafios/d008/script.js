let botao = document.querySelector('.botao')
let conversao = document.querySelector('.conversao')

botao.addEventListener('click', converter)

function converter () {
    let produto = prompt('Qual é o produto que você está comprando?')
    let precoProduto = Number(prompt(`Qual é o preço do(a) ${produto}`))
    let desconto = precoProduto * 10 / 100
    let precoFinal = precoProduto - desconto
    

    conversao.innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>`
    conversao.innerHTML += `<p>O preço original do(a) <strong>${produto}</strong> era <strong>${precoProduto.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}.</strong>`
    conversao.innerHTML += `<p>Você acaba de ganhar <strong>${desconto.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong> de desconto (-10%).</p>`
    conversao.innerHTML += `<p>No fim, você vai pagar <strong>${precoFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong> no produto ${produto}.</p>`
}


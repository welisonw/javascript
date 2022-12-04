let botao = document.querySelector('.botao')
let conversao = document.querySelector('.conversao')

botao.addEventListener('click', reajustar)

function reajustar() {
    let nomeFuncionario = prompt('Por favor, informe o nome do(a) funcionário(a):')
    let salarioAtual = Number(prompt(`Qual é o salário atual do(a) ${nomeFuncionario}`))
    let porcentagemReajuste = prompt(`Qual vai ser a porcentagem de reajuste do salário do(a) ${nomeFuncionario}?`)
    let valorAumento = salarioAtual * porcentagemReajuste / 100
    let novoSalario = salarioAtual + valorAumento

    conversao.innerHTML += `<h1>${nomeFuncionario} recebeu um aumento salarial!</h1>`
    conversao.innerHTML += `<p>O salário atual era de <strong>${salarioAtual.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}.</strong></p>`
    conversao.innerHTML += `<p>Com um aumento de ${porcentagemReajuste}%, o salário vai aumentar <strong>${valorAumento.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</strong> no próximo mês.</p>`
    conversao.innerHTML += `<p>E a partir daí, ${nomeFuncionario} vai passar a ganhar <strong>${novoSalario.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}.</strong>`
}
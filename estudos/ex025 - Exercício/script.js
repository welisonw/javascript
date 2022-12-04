let numero = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let informacoes = document.querySelector('.informacoes')
let valores = [] // Vetor/Array

function eNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(eNumero(numero.value) && !naLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        // Push é adicionar um elemento em um vetor
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        informacoes.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Nenhum valor adicionado. Por favor, adicione valores antes de finalizar!')
    } else {
        let totalElementos = valores.length
        let maiorNumero = valores[0]
        let menorNumero = valores[0]
        let soma = 0
        let media = 0


        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maiorNumero) {
                maiorNumero = valores[posicao]
            }
            if (valores[posicao] < menorNumero) {
                menorNumero = valores[posicao]
            }
        }

        media = soma / totalElementos

        informacoes.innerHTML = ''
        informacoes.innerHTML += `<br><h2>Ao todo, temos ${totalElementos} números cadastrados.</h2>`
        informacoes.innerHTML += `<br><h2>O menor número informado foi o ${menorNumero}.</h2>`
        informacoes.innerHTML += `<br><h2>O maior número informado foi o ${maiorNumero}.</h2>`
        informacoes.innerHTML += `<br><h2>A soma entre todos os valores é de ${soma}.</h2>`
        informacoes.innerHTML += `<br><h2>A média dos valores digitados é de ${media}.</h2>`
    }
}
function  contar() {

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let contagem = document.querySelector('.contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = 'Impossível contar!'
        window.alert('ERRO! Faltam dados!')
    } else {
        contagem.innerHTML = '<br>Contando... <br><br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        contagem.innerHTML = ''

        if (p <= 0 || p > f) {
            window.alert('Passo inválido! Considerando PASSO como valor 1!')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(let contador = i; contador <= f; contador += p) {
                contagem.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let contador = i; contador >= f; contador -= p) {
                contagem.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        contagem.innerHTML += ` \u{1F3C1}`
    }
}
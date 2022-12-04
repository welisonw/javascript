function carregar() {
    var msg = document.getElementsByClassName('mensagem')[0]
    var img = document.getElementsByClassName('imagem') [0]
    var saudacao = document.getElementsByTagName('h3') [0]
    var data = new Date()
    var hora = data.getHours()
    var horaString = data.toLocaleTimeString()
    var intervald = window.setInterval(() => {carregar()}, 1)

    msg.innerHTML = `Agora são ${horaString} horas`

    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = 'Bom dia!'
        img.src = ('imagens/manha.png')
        document.body.style.backgroundColor = 'rgb(116,165,168)'
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = 'Boa tarde!'
        img.src = ('imagens/tarde.png')
        document.body.style.backgroundColor = 'rgb(174,118,120)'
    } else {
        saudacao.innerHTML = 'Boa noite!'
        img.src = ('imagens/noite.png')
        document.body.style.backgroundColor = 'rgb(67,84,95)'
    }
    

}


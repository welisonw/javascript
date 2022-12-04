function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoformulario = document.getElementById('ano')
    var resultado = document.querySelector('div.resultado')
    if (anoformulario.value.length == 0 || anoformulario.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexoformulario = document.getElementsByName('sexo')
        var idade = ano - Number(anoformulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('class', 'foto') // mesmo que criar no HTML: <img class='foto'

        if (sexoformulario[0].checked && idade >= 0 && idade < 13) {
            genero = 'Menino'
            img.setAttribute('src', 'imagens/bebe-m.png')
        } else if (sexoformulario[0].checked && idade >= 13 && idade < 19 /* Ou somente: else if (idade < 19) */) {
            genero = 'Rapaz'
            img.setAttribute('src', 'imagens/jovem-m.png')
        } else if (sexoformulario[0].checked && idade < 60) {
            genero = 'Homem'
            img.setAttribute('src', 'imagens/adulto-m.png')
        } else if (sexoformulario[0].checked) {
            genero = 'Idoso'
            img.setAttribute('src', 'imagens/idoso-m.png')
        }

        if (sexoformulario[1].checked && idade >= 0 && idade < 13) {
            genero = 'Menina'
            img.setAttribute('src', 'imagens/bebe-f.png')
        } else if (sexoformulario[1].checked && idade >= 13 && idade < 19 /* Ou somente: else if (idade < 19) */) {
            genero = 'Moça'
            img.setAttribute('src', 'imagens/jovem-f.png')
        } else if (sexoformulario[1].checked && idade < 60) {
            genero = 'Mulher'
            img.setAttribute('src', 'imagens/adulto-f.png')
        } else if (sexoformulario[1].checked) {
            genero = 'Idosa'
            img.setAttribute('src', 'imagens/idoso-f.png')
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        resultado.appendChild(img)
      
    } 
}

/* AULA:

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoformulario = document.getElementById('ano')
    var resultado = document.querySelector('div.resultado')
    if (anoformulario.value.length == 0 || anoformulario.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexoformulario = document.getElementsByName('sexo')
        var idade = ano - Number(anoformulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('class', 'foto') // mesmo que criar no HTML: <img class='foto'
        if (sexoformulario[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade >= 13 && idade < 19) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }  
        } else if (sexoformulario[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade >= 13 && idade < 19) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        resultado.appendChild(img)  
    } 
}

*/
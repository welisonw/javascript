let botao = document.querySelector('.botao')
let verificarNotas = document.querySelector('.notas')

botao.addEventListener('click', verificar)

function verificar() {
    let nomeAluno = prompt('Qual é o nome do(a) aluno(a)?')
    let nota1 = Number(prompt(`Digite a nota do primeiro semestre do(a) ${nomeAluno}:`))
    let nota2 = Number(prompt(`Digite a nota do segundo semestre do(a) ${nomeAluno}:`))
    let media = (nota1 + nota2) / 2
    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        window.alert('ERRO! Por favor digite um valor de 0 a 10!')
    } else {
        verificarNotas.innerHTML = `<h1>Analisando a situação de ${nomeAluno}:`

        if (media < 5.0) {
            verificarNotas.innerHTML += `<p>Com as notas ${String(nota1).replace(".", ",")} e ${String(nota2).replace(".", ",")}, <strong>a média é de ${String(media).replace(".", ",")}</strong>.</p>`
            verificarNotas.innerHTML += `<p>Com essa média, ${nomeAluno} está <mark style = "background-color: lightcoral; color: darkred; font-weight: bold;">REPROVADO(A).</mark></p>`
        } else if (media >= 5.0 && media < 7.0) {
            verificarNotas.innerHTML += `<p>Com as notas ${String(nota1).replace(".", ",")} e ${String(nota2).replace(".", ",")}, <strong>a média é de ${String(media).replace(".", ",")}</strong>.</p>`
            verificarNotas.innerHTML += `<p>Com essa média, ${nomeAluno} está <mark style = "background-color: lightgoldenrodyellow; color: goldenrod; font-weight: bold;">EM RECUPERAÇÃO.</mark></p>`
        } else {
            verificarNotas.innerHTML += `<p>Com as notas ${String(nota1).replace(".", ",")} e ${String(nota2).replace(".", ",")}, <strong>a média é de ${String(media).replace(".", ",")}</strong>.</p>`
            verificarNotas.innerHTML += `<p>Com essa média, ${nomeAluno} está <mark style = "background-color: lightgreen; color: darkgreen; font-weight: bold;">APROVADO(A).</mark> PARABÉNS!!!</p>`
        }
    }
}
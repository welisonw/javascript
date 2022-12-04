let numero = [5, 8, 2, 9, 3] 
numero.push(1)
numero.sort()
console.log(numero)
console.log(`O vetor tem ${numero.length} posições`)
console.log(`O primeiro valor do vetor é de ${numero[0]}`)
let posicao = numero.indexOf(8)
if (posicao == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log (`O valor 8 está na posição ${posicao}`)
}

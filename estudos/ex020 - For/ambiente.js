/* Estrutura de repetição com teste lógico no início

var contador = 1

while (contador <= 20) {
    console.log (`Passo ${contador}`)
    contador++
}

*/ 


// Estrutura de repetição com variável de controle

console.log('Vai começar...')
for(var contador = 1; contador <= 20; contador++) { // for(inicialização; teste lógico; incremento)
    console.log(`Passo ${contador}`)
}
console.log('FIM!')
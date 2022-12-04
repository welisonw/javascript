//Cálculo fatorial

function fatorial(numero) {
    let fat = 1
    for(let contador = numero; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}

console.log(fatorial(5))

//5! (cinco fatorial) = 5 x 4 x 3 x 2 x 1 = 120, 
//Que é o mesmo que 5! = 5 x 4!
//n! = n x (n-1)!
//1! = 1



//Posso, ainda, fazer o fatorial de uma maneira recursiva
//Uma recurssão acontece quando uma função chama ela mesma 

/*

function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))

*/
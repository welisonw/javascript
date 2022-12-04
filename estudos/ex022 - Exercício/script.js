function clicou() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let number = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${number} x ${contador} = ${number*contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
            contador++
        }
        
    }

   

    








}
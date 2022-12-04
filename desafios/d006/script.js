let conversao = document.querySelector('.conversao')


function converter() {
    let temperatura = Number(window.prompt('Digite uma temperatura em Cº (Célsius):'))
    let kelvin = temperatura + 273.15
    let fahrenheit = (temperatura * 9/5) + 32

    conversao.innerHTML = `<h1>A temperatura de ${temperatura.toFixed(1).replace(".", ",")}ºC corresponde à:</h1>`
    conversao.innerHTML += `<p>${kelvin.toFixed(2).replace(".", ",")}ºK (Kelvin)</p>`
    conversao.innerHTML += `<p>${fahrenheit.toFixed(2).replace(".", ",")}ºF (Fahrenheit)</p>`

}
//let palabra = lista [Math.floor(math.random()*lista.length)]
let intentos = 6
const API = 'https://random-word-api.herokuapp.com/word?length=5&lang=es'

fetch(API)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        palabra = response [0].toUpperCase()
        console.log(palabra)
    })
    .catch(err => palabra = lista[Math.floor(math.random()*lista.length)])

const BOTON = document.getElementById('guess-button')
BOTON.addEventListener('click', intentar)



function intentar() {
    const GRID = document.getElementById('grid')
    const ROW = document.createElement('row')
    ROW.className = 'row'
    const INTENTO = leerIntento()
    if (INTENTO == palabra){
        terminar('<h1> GANASTE!! </h1>')
        return
    }
    for(let i in palabra){
        const SPAN = document.createElement('span')
        SPAN.className = 'letter'
        if (palabra[i] == INTENTO [i]){
            SPAN.innerHTML = INTENTO [i]
            SPAN.style.backgroundColor = 'green'
        }
        else if (palabra.includes(INTENTO[i])){
            SPAN.innerHTML = INTENTO [i]
            SPAN.style.backgroundColor = 'yellow'
        } else {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = 'gray'
        }
        ROW.appendChild (SPAN)
    }
    GRID.appendChild(ROW)

    intentos--
    if (intentos==0){
        terminar('<h1> PERDISTE :( </h1>')
    }
}    
function leerIntento() {
    let intento = document.getElementById('guess-input').value
    intento = intento.toUpperCase()
    return intento
}

function terminar(mensajes) {
    BOTON.disabled = true
    let contenedor = document.getElementById('guesses')
    contenedor.innerHTML = mensajes    
}

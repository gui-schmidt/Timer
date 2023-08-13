const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let sec = 0
let min = 0
let hour = 0

let timer



document.addEventListener('click', function(e){
    const el = e.target
    
    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        sec = 0
        min = 0
        hour = 0
        relogio.style.color = '#000000'
        relogio.innerHTML = '00:00:00'
    }

    if (el.classList.contains('iniciar')) {
        clearInterval(timer)
        relogio.style.color = '#000000'
        timer = setInterval(watch, 1000)
        return timer
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.style.color = '#FF0000'
    }
})

function watch() {
    sec++
    if (sec === 60) {
        min++
        sec = 0
    }
    if (min === 60) {
        hour++
        min = 0
    }
relogio.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
}


/*iniciar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.style.color = '#000000'
    timer = setInterval(watch, 1000)
    return timer

})


pausar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.style.color = '#FF0000'

})



zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    sec = 0
    min = 0
    hour = 0
    relogio.style.color = '#000000'
    relogio.innerHTML = '00:00:00'
})*/


// Formas de escutar um evento:


//  x.addEventListener (sendo x o lugar que você quer colocar o seu escutador)
// colocar onsubmit='x' no html, sendo x o nome da função que você quer colocar no seu js

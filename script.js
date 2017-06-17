const remote = require('electron').remote
const main = remote.require('./main.js')

// Creamos boton en js para llamar desde la vista a la nueva ventana
let button = document.createElement('button')
button.textContent = 'Abrir Ventana'
document.body.appendChild(button)

button.addEventListener('click', ()=> {
  main.openWindow()
})

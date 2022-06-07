// Template Strings

const nombre = 'Julio'
const trabajo = 'Desarrollador Web'

//concatenar Javascript
console.log('Nombre ' + nombre + 'Trabajo:' + trabajo)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)

// concatenor con multiples lineas
const contenedorApp = document.querySelector('#app')
//let html = '<ul>' +
//'<li> Nombre:' + nombre + '</li>'
//'<li> Trabajo: ' + trabajo + '</li>' +
//'</ul>'

let html = `
        <ul>
         <li>Nombre: ${nombre} </li>
         <li>Trabajo: ${trabajo} </li>
        </ul>
`

contenedorApp, (innerHTML = html)

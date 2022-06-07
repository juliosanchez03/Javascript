const aprendiendoJS = {
 version: {
  nueva: 'ES6',
  anterior: 'ES5',
 },
 frameworks: ['React', 'VueJS', 'Angular'],
}

// Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS)

// version anterior
// let version = aprendiendoJS.version.nueva

// Destructuring form nueva
let { anterior } = aprendiendoJS.version
console.log(anterior)

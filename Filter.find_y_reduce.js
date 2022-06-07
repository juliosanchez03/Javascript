// Metodos en arreglos

const personas = [
 { nombre: 'Juan', edad: 23, eprendiendo: 'Javascript' },
 { nombre: 'Pablo', edad: 18, eprendiendo: 'PHP' },
 { nombre: 'Alejandra', edad: 21, eprendiendo: 'AdobeXD' },
 { nombre: 'Caren', edad: 30, eprendiendo: 'Python' },
 { nombre: 'JMiguel', edad: 35, eprendiendo: 'ReactJS' },
]

console.log(personas)

// mayores de 28 años
const mayores = personas.filter((persona) => {
 return persona.edad > 28
})
// console.log(mayores)

// que aprende alejandra y su edad
const alejandra = personas.find((persona) => {
 return persona.nombre === 'Alejandra'
})
// console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo)

let total = personas.reduce((edadTotal, persona) => {
 return edadTotal + persona.edad
}, 0)

// objetos

// object literal
const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador web',
 edad: 27,
}
console.log(persona)

// Object Constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

// crear una nueva tarea
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente')
const tarea2 = new Tarea('Prerparar café', 'Urgente')
const tarea3 = new Tarea('Pasear al perro', 'Media')
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)

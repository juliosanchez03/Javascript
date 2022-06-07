// objetos

// object literal
const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador web',
 edad: 27,
}
console.log(persona)
// const mostrarcliente = mostrarinformacionTarea(persona,nombre,persona,profesión)
//console.log(mostrarcliente)

// Object Constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}
// Agregar un prototype a tarea:
Tarea.prototype.mostrarinformacionTarea = function () {
 return `La tarea ${this.nombre} tiene prioridad de ${this.urgencia}`
}

// crear una nueva tarea
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente')
const tarea2 = new Tarea('pasear al perro', 'Media')
console.log(tarea1)
console.log(tarea1.mostrarinformacionTarea())
console.log(tarea2)
console.log(tarea2.mostrarinformacionTarea())

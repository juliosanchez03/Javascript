// metodos o funciones en un objeto

const persona = {
 nombre: 'Juan',
 trabajo: 'Desarrollador Web',
 edad: 25,
 musicaRock: true,
 mostrarinformacion() {
  console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
 },
}

persona.mostrarinformacion()

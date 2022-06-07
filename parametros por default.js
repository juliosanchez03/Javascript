// parametros por default enlas funciones

const actividad = function (
 nombre = 'Walter White',
 actividad = 'Enseñar Quimica'
) {
 console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad('Julio', 'Aprender Javascript')
actividad('Pedro', 'Creando un sitio web')
actividad('Antonio')

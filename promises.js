// Promises

const aplicarDescuento = new Promise((resolver, reject) => {
 setTimeout(() => {
  let descuento = true

  if (descuento) {
   resolver('Descuento aplicado!')
  } else {
   reject('No se pudo aplicar el descuento')
  }
 }, 3000)
})

aplicarDescuento.then((resultado) => {
 console.log(error)
})

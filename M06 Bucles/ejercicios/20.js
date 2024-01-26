function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  if(n <= 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    if(i > 100) {
      break;
    }
    suma += i;
  }
  return suma;
}
console.log(sumarHastaNConBreak(20))

module.exports = sumarHastaNConBreak;
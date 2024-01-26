function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const stringFormateado = string.toLowerCase().replace(/\s/g, "");

  for(let i = 0; i < Math.floor(stringFormateado.length / 2); i++) {
    if(stringFormateado[i] !== stringFormateado[stringFormateado.length - 1 - i]) {
    return false;
  }
  }
  return true;
}

module.exports = esPalindromo;
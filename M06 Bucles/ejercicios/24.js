function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  const arrayDeCaracteres = texto.split("");

  const arrayInvertido = arrayDeCaracteres.reverse();

  const textoInvertido = arrayInvertido.join("");

  return textoInvertido;
}

module.exports = invertirTexto;
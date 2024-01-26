function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var dias;
  do {
    if (
      mes == 1 ||
      mes == 3 ||
      mes == 5 ||
      mes == 7 ||
      mes == 8 ||
      mes == 10 ||
      mes == 12
    ) {
      return (dias = 31);
    } else if ((mes == 2)) {
      return (dias = 28);
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
      return (dias = 30);
    } else {
      return (dias = 0);
    }
  } while (mes >= 1 && mes <= 12);
}

module.exports = diasEnMes;

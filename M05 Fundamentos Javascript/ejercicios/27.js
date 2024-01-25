function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  if (typeof nombre === "string" && typeof apellido === "string") {
    return nombre + " " + apellido
  }
}
module.exports = combinarNombres;

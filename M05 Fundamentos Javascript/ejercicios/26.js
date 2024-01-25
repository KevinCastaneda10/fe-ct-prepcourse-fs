function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  if (typeof str === "string") {
    return str + "!";
  } else {
    return "Error: El argumento debe ser un string"
  }
}

module.exports = agregarSimboloExclamacion;

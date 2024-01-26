function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if(b < a) {
    return "Argumentos inválidos. b debe ser mayor o igual que a";
  }
  let producto = 1;

  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto == -0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;
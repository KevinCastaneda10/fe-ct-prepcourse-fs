function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if(a >= 0){
    if(a < 10 ){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
 }
console.log(esPositivoOInferiorA10(100));
module.exports = esPositivoOInferiorA10;
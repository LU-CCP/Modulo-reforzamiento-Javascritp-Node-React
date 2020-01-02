// 1.	Crear una función que retorne un array de subarrays de largo “n”, donde los elementos de cada
//      subarray deben sumar “k” entre sí.
//     Estructura de la función: sumaConcecutiva(array, n, k).
//     Ejemplo: sumaConcecutiva([3,4,1,9,9,0,3,5,4], 3, 8) => [[3,4,1], [0,3,5]]

//var arreglo = [1, 2, 6, 4, 8, 3, 6, 7, 4, 6];

function sumaConcecutiva(arreglo, n, k) {
  let arrayFinal = [];
  for (i = 0; i < arreglo.length - n; i++) {
    let subArray = arreglo.slice(i, n + i);
    let sum = subArray.reduce((prev, current) => prev + current);
    if (sum === k) {
      arrayFinal.push(subArray);
    }
  }
  return arrayFinal;
}
console.log(sumaConcecutiva([1, 2, 6, 4, 8, 3, 6, 7, 4, 6], 3, 10));

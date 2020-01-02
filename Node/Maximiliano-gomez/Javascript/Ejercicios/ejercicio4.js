//Ejercicio 4
let array = [9, 1, 8, 3, 4, 1, 3, 9, 0, 5, 2, 7, 1, 10, 5, 0];
const sumaConcecutivaN = (array, n, k) => {
  let arregloTemporal = [];
  for (i = 0; i < array.length - n; i++) {
    let temporalArray = array.slice(i, n + i);
    let sum = temporalArray.reduce((prev, current) => prev + current);
    if (sum === k) {
      arregloTemporal.push(temporalArray);
    }
  }
  return arregloTemporal;
};

console.log(sumaConcecutivaN(array, 3, 8));

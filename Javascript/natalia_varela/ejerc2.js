const array = [3, 4, 1, 9, 9, 0, 3, 5, 4];
function sumaConcecutiva(array, n, k) {
  let arregloTemporal = [];
  for (let i = 0; i < array.length - n; i++) {
    let temporalArray = array.slice(i, n + i);
    let sum = temporalArray.reduce((prev, current) => prev + current);
    if (sum === k) {
      arregloTemporal.push(temporalArray);
    }
  }
  return arregloTemporal;
}
console.log(sumaConcecutiva([3, 4, 1, 3, 9, 0, 3, 5, 4], 3, 8));

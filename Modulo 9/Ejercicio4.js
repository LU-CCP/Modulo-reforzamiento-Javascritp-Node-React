const array = [3, 4, 1, 9, 9, 0, 3, 5, 4];
const n = 3;
const k = 8;
let arrayRes = [];
let arrayAux = [];
let cont = 0;
let res = 0;

const sumaConcecutiva = (array, n, k) => {
  for (let index = 0; index < array.length - n; index++) {
    for (let j = index; j < n + index; j++) {
      res += array[j];

      //   console.log(res);
      //   console.log("index: ", index, "j: ", j, "array: ", array[j]);
      arrayAux.push(array[j]);
    }
    if (res == k) {
      arrayRes[cont] = arrayAux;
      cont++;
    }
    arrayAux = [];
    res = 0;
    //console.log(res);
  }
  return arrayRes;
};

console.log(sumaConcecutiva(array, n, k));

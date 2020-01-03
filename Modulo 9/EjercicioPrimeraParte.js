const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = "";
let element = [];
const obtenerNelementos = array => {
  if (!!n) {
    for (let index = 0; index < n; index++) {
      element[index] = array[index];
    }
    return element;
  } else {
    return array[0];
  }
};

console.log(obtenerNelementos(array, n));

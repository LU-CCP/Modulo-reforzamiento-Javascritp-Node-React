let array = [1, 2, 3, 4, 5];

function obtenerNelementos(array, n) {
  this.n = n || 1;
  for (let i = 0; i < array.length; i++) {
    if (this.n == i) {
      break;
    }
    console.log(array[i]);
  }
}

obtenerNelementos(array);

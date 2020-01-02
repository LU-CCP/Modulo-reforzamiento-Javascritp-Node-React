// 1.Crear una función que retorne los “n” primeros elementos de un array. Si “n” no es pasado a la función,
// esta deberá retornar el primer elemento.
// Estructura de la función: obtenerNelementos(array, n);

const array = [1, 2, 3, 4, 5, 6, 2];
//const n = 5;

const obtenerNElementos = (array, n) => {
  if (!n) {
    console.log(array[0]);
  } else {
    for (let i = 0; i < n; i++) {
      console.log(array[i]);
    }
  }
};

obtenerNElementos(array);

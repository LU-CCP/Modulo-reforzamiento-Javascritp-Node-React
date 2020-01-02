const obtenerNelementos = (array, n = null) => {
  let newArray = [];
  const contador = !n ? 1 : n;

  for (let index = 0; index < contador; index++) {
    newArray.push(array[index]);
  }
  return newArray;
};

console.log(obtenerNelementos([6, 2, 3, 4], 2));

const keyObject = objeto => {
  return Object.keys(objeto);
};

console.log(keyObject({ name: 22 }));

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

console.log(sumaConcecutivaN([3, 4, 1, 3, 9, 0, 3, 5, 4], 3, 8));

const mapeoDePalabras = palabra => {
  let objeto = {};
  for (i = 0; i < palabra.length; i++) {
    let letra = palabra.substr(i, 1);
    objeto[letra] ? objeto[letra].push(i) : (objeto[letra] = [i]);
  }
  return objeto;
};

console.log(mapeoDePalabras("dado"));

const comparaObjetos = (objA, objB) => {
  let count = 0,
    for (let keyA in objA) {
      for(let keyB in objB) {
        if (keyA == keyB && objA[keyA] == objB[Keyb]) {
          
        }
      }
    }
};

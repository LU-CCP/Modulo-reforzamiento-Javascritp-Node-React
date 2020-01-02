A = {
  b: "b",
  a: "a",
  c: "c"
};

B = {
  b: "b",
  a: "c"
};

const comparaObjetos = (objA, objB) => {
  let cont = 0;
  let largo = 0;
  for (var keyA in objA) {
    largo++;
    for (var keyB in objB) {
      if (keyA === keyB && objA[keyA] === objB[keyB]) {
        cont++;
      }
    }
  }
  if (cont === largo) {
    return false;
  }
  return true;
};

console.log(comparaObjetos(A, B));

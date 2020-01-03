objA = { a: "valueA", b: 10, c: "c" };
objB = { a: "valueA", b: 10, c: "c" };

function compara_objetos(objA, objB) {
  for (let key in objB) {
    if (objA[key] != objB[key]) {
      return false;
    }
  }
  return true;
}

console.log(compara_objetos(objA, objB));

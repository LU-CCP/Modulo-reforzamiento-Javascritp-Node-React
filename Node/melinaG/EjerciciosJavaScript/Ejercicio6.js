// Escribir un programa que compare dos objetos (A y B) y determine si el primero tiene las propiedades del
//segundo y además estas propiedades deben poseer los mismos valores.
// La respuesta de la función debe ser un True o un False.
// Estructura de la función:   function compara_objetos(objA, objB)
// Ejemplo1:
// A = { a: "valueA", b: 10, c: "c" }  r
// B = { a: "valueA", b: 10 }

objA = { a: "lala", b: 23, c: "se" };
objB = { b: 23, a: "sjdsf" };
function compara_objetos(objA, objB) {
  let value = false;
  let arrKeyA = Object.keys(objA);
  let arrKeyB = Object.keys(objB);
  let arrValA = Object.values(objA);
  let arrValB = Object.values(objB);
  for (let i = 0; i < arrKeyB.length; i++) {
    if (!arrKeyA.includes(arrKeyB[i])) {
      value = false;
    } else {
      for (let i = 0; i < arrKeyB.length; i++) {
        for (let j = 0; j < arrKeyA.length; j++) {
          if (arrValA.includes(arrValB[i])) {
            value = true;
          } else {
            value = false;
          }
        }
      }
    }
  }

  return value;
}
console.log(compara_objetos(objA, objB));

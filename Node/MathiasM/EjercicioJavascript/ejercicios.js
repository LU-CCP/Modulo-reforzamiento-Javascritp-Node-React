// Crear una función que retorne los “n” primeros elementos de un array.
// Si “n” no es pasado a la función, esta deberá retornar el primer elemento.
// Estructura de la función: obtenerNelementos(array, n);

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let array2 = [];
// const objeto = { nombre: "jeremy", apellido: "andrades", edad: "500" };
// let keys = [];
// const string = "jeremy";
// let stringAux = "";

// const retornaN = () => {
//   valorPedido = "";
//   if (valorPedido != "") {
//     for (let i = 0; i < valorPedido; i++) {
//       array2[i] = array[i];
//     }
//     return array2;
//   } else {
//     return array[0];
//   }
// };

// // console.log(retornaN());

// const retornaKey = objeto => {
//   keys = Object.keys(objeto);
//   return keys;
// };

// // console.log(retornaKey(objeto));

// const string = "JorgeGajardo";
// let stringAux = "";
// const range = "g-j";
// const reemplazar = (string, range) => {
//   for (let index = 0; index < string.length; index++) {
//     console.log(string.charAt(index), range.charAt(0));
//     if (string.charAt(index) == range.charAt(0)) {
//       do {
//         stringAux += "#";
//         index++;
//       } while (string.charAt(index) != range.charAt(2));
//     } else {
//       stringAux += string.charAt(index);
//     }
//   }
//   return stringAux;
// };

// console.log(reemplazar(string, range));

// const array = [3, 4, 1, 9, 9, 0, 3, 5, 4];
// const n = 3;
// const k = 8;
// let arrayRes = [];
// let arrayAux = [];
// let cont = 0;
// let res = 0;

// const sumaConcecutiva = (array, n, k) => {
//   for (let index = 0; index < array.length - n; index++) {
//     for (let j = index; j < n + index; j++) {
//       res += array[j];

//       //   console.log(res);
//       //   console.log("index: ", index, "j: ", j, "array: ", array[j]);
//       arrayAux.push(array[j]);
//     }
//     if (res == k) {
//       arrayRes[cont] = arrayAux;
//       cont++;
//     }
//     arrayAux = [];
//     res = 0;
//     //console.log(res);
//   }
//   return arrayRes;
// };

// console.log(sumaConcecutiva(array, n, k));

// const string = "dodo";
// objeto = {};
// array = [];

// const mapeoDePalabras = string => {
//   for (let i = 0; i < string.length; i++) {
//     objeto[i] = string.charAt(i);
//   }
//   return objeto;
// };

// console.log(mapeoDePalabras(string));
// console.log(Object.keys(objeto));

// function sumaConcecutiva(array, n, k) {
//   let arregloTemporal = [];
//   for (let i = 0; i < array.length; i++) {
//     let temporalArray = array.slice(i, n + i);
//     let sum = temporalArray.reduce((prev, current) => prev + current);
//     if (sum === k) {
//       arregloTemporal.push(temporalArray);
//     }
//   }
//   return arregloTemporal;
// }

// const string = "pipo";
// function mapeoDePalabras(string) {
//   objeto = {};
//   for (let i = 0; i < string.length; i++) {
//     let letra = string.substr(i, 1);
//     objeto[letra] ? objeto[letra].push(i) : (objeto[letra] = [i]);
//   }
//   return objeto;
// }

// console.log(mapeoDePalabras(string));

function ComparaObj() {
  const A = { a: "pipo", b: "patrick", c: "pocoyo" };
  const B = { a: "pipo", b: "patrick" };

  for (let key in B) {
    if (A[key] != B[key]) {
      return false;
    }
  }
  return true;
}
console.log(ComparaObj());

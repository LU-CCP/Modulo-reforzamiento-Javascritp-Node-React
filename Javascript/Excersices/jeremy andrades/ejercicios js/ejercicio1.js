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

// const mapeoDePalabras = string => {
//   let arrayAux = [];
//   let object = {};
//   let letras = [];

//   for (let i = 0; i < string.length; i++) {
//     if (!letras.includes(string.charAt(i))) {
//       letras.push(string.charAt(i));
//     }
//   }

//   for (let i = 0; i < letras.length; i++) {
//     for (let j = 0; j < string.length; j++) {
//       if (letras[i] == string.charAt(j)) {
//         arrayAux.push(j);
//       }
//     }
//     object[letras[i]] = arrayAux;
//     arrayAux = [];
//   }

//   return object;
// };

// const string = "pipo";
// function mapeoDePalabras(string) {
//   objeto = {};
//   for (let i = 0; i < string.length; i++) {
//     let letra = string.substr(i, 1);
//     // if(objeto[letra]){
//     //   objeto[letra].push(i)
//     // }else {
//     //   (objeto[letra] = [i])
//     // }
//     objeto[letra] ? objeto[letra].push(i) : (objeto[letra] = [i]);
//   }
//   return objeto;
// }

// console.log(mapeoDePalabras(string));
// console.log(Object.keys(objeto));

// let A = { a: "valueA", b: 10, c: "c" };
// let B = { a: "valueA", b: 10 };

// const comparaObjetos = (objA, objB) => {
//   let boolean = true;

//   for (let i = 0; i < Object.keys(objB).length; i++) {
//     if (
//       Object.keys(objB)[i] !== Object.keys(objA)[i] ||
//       Object.values(objB)[i] !== Object.values(objA)[i]
//     ) {
//       boolean = false;
//     }
//   }

//   return boolean;
// };

// console.log(comparaObjetos(A, B));

function ComparaObj() {
  const A = { a: "pipo", b: "patrick", c: "pocoyo" };
  const B = { b: "patrick", a: "pipo" };

  for (let key in B) {
    if (A[key] != B[key]) {
      return false;
    }
  }
  return true;
}
console.log(ComparaObj());

/*Dado un string, crear una función que retorne un objeto que almacene las 
posiciones de cada carácter en un array. Cada key del objeto será un carácter del string con su respectivo array de posiciones.
Estructura de la función: mapeoDePalabras(string)
Ejemplo:
    mapeoDePalabras("dodo") ➞ { d: [0 , 2], o: [1, 3]}
   mapeoDePalabras ("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }*/
let texto = "dodddo";

function mapeoDePalabras(palabra) {
  let objeto = {};
  for (i = 0; i < palabra.length; i++) {
    let letra = palabra.substr(i, 1);
    objeto[letra] ? objeto[letra].push(i) : (objeto[letra] = [i]);
  }
  return objeto;
}
console.log(mapeoDePalabras(texto));

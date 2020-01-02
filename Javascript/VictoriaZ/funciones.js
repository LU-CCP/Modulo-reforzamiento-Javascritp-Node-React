// 1.	Crear una función que retorne los “n” primeros elementos de un array.
//Si “n” no es pasado a la función, esta deberá retornar el primer elemento.
//Estructura de la función: obtenerNelementos(array, n);

function obtenerNelementos(array, n) {
  let res = [];
  if (n) {
    for (i in array) {
      if (i < n) {
        res[i] = array[i];
      }
    }
  } else {
    res = array[0];
  }
  console.log(res);
  return res;
}

//let resultado = obtenerNelementos([1, 2, 3, 4], 3);

//2.	Crear una función que retorne en un array las keys de un objeto.

let obj = {
  nombre: "Victoria",
  apellido: "Zanforlin",
  edad: 24
};

const keysObjeto = obj => {
  console.log(Object.keys(obj));
  return Object.keys(obj);
};

//let ej2 = keysObjeto(obj);

//Crear una función que reemplace los caracteres de un string, los caracteres
//a reemplazar son aquellos que esté en un determinado rango, por el símbolo
// hash “#”.
//Estructura de la función:  reemplazar(string, range)
//Ejemplo: reemplazar (“abcdef”, “c-e”) => "ab###f"

const reemplazar = (string, range) => {
  let resultado3 = "";
  for (i in string) {
    if (string.charAt(i) == range.charAt(0)) {
      console.log(string.charAt(i));
      while (string.charAt(i) !== range.charAt(2)) {
        resultado3 = resultado3 + "#";
        i++;
        console.log(resultado3);
      }
      resultado3 = resultado3 + "#";
      console.log(resultado3);
    } else {
      let j = resultado3.length;
      resultado3 = resultado3 + string.charAt(j);
    }
  }
  console.log(resultado3);
  return resultado3;
};

const reemplazarAbcedario = (string, range) => {
  const abcdario = "abcdefghijklmnñopqrstuvwxyz";
  let caract = "";
  for (i in abcdario) {
    if (range.charAt(0) == abcdario.charAt(i)) {
      caract = caract + abcdario.charAt(i);
      i++;
      while (range.charAt(2) !== abcdario.charAt(i)) {
        caract = caract + abcdario.charAt(i);
        i++;
      }
      caract = caract + range.charAt(2);
    }
  }

  let resultado3 = "";
  for (i in string) {
    if (caract.includes(string.charAt(i))) {
      resultado3 = resultado3 + "#";
    } else {
      resultado3 = resultado3 + string.charAt(i);
    }
  }
  console.log(resultado3);
  return resultado3;
};

const string = "abcdefghi";
const range = "e-g";

let ej3 = reemplazar(string, "b-d");
console.log(ej3);

//1.	Crear una función que retorne un array de subarrays de largo “n”, donde
//los elementos de cada subarray deben sumar “k” entre sí.
//Estructura de la función: sumaConcecutiva(array, n, k).
//Ejemplo: sumaConcecutiva([3,4,1,9,9,0,3,5,4], 3, 8) => [[3,4,1], [0,3,5]]

const sumaConsecutiva = (array, n, k) => {
  let resultado = [];
  for (i in array) {
    // for (let i=0; i<array.length-n; i++)
    let suma = 0;
    let arraux = [];
    for (let j = 0; j < n; j++) {
      let aux = parseInt(i) + parseInt(j);
      suma = suma + array[aux];
      arraux.push(array[aux]);
    }
    if (suma == k) {
      resultado.push(arraux);
    }
  }
  console.log(resultado);
  return resultado;
};

sumaConsecutiva([1, 3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8);

//2.	Dado un string, crear una función que retorne un objeto que almacene las posiciones de cada carácter en un array.
//Cada key del objeto será un carácter del string con su respectivo array de posiciones.
//Estructura de la función: mapeoDePalabras(string)
//Ejemplo:
//  mapeoDePalabras("dodo") ➞ { d: [0 , 2], o: [1, 3]}
//mapeoDePalabras ("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

const mapeoDePalabras = string => {
  let caracteres = {};
  for (i in string) {
    if (Object.keys(caracteres).includes(string.charAt(i))) {
      caracteres[string.charAt(i)].push(parseInt(i));
    } else {
      caracteres[string.charAt(i)] = [];
      caracteres[string.charAt(i)].push(parseInt(i));
    }
    console.log(caracteres);
  }
  return caracteres;
};

//mapeoDePalabras("froggy");

// Escribir un programa que compare dos objetos (A y B) y determine si el primero tiene las propiedades del segundo
//y además estas propiedades deben poseer los mismos valores.
//La respuesta de la función debe ser un True o un False.
//Estructura de la función:   function compara_objetos(objA, objB)
//Ejemplo1:
//A = { a: "valueA", b: 10, c: "c" }  r
//B = { a: "valueA", b: 10 }
//Objeto A tiene las propiedades del objeto B, y tienen los mismos valores, retorna True.

//Ejemplo2:
//A = { a: "valueA", b: 10 }
//B = { a: "valueA", b: 10, c: “c” }
//Objeto A no tiene las propiedades del objeto B, retorna False.

//Ejemplo3:
//A = { a: "valueA", b: 10, c: "c" }  r
//B = { a: "valueA", b: 10, c: “d” }
//Objeto A tiene las propiedades del objeto B, pero no tienen los mismos valores, retorna False.

function compara_objetos(objA, objB) {
  for (i in objB) {
    if (!Object.keys(objA).includes(i) || objA[i] !== objB[i]) {
      return false;
    }
  }
  return true;
}

let A = { a: "valueA", b: 10, c: "c" };
let B = { a: "valueA", b: 10 };

// let A = { a: "valueA", b: 10 };
// let B = { a: "valueA", b: 10, c: "c" };

// let A = { a: "valueA", b: 10, c: "c" };
// let B = { a: "valueA", b: 10, c: "d" };

//console.log(compara_objetos(A, B));

// Implementar una clase “Empleado” con las siguientes propiedades: “nombre” y “departamento” de tipo string.
// También queremos implementar una clase “Director”, que tenga las mismas propiedades que “Empleado”, pero además
// que tenga una propiedad llamada “informes”, que sea un array que contenga elementos de tipo string.

// También queremos implementar la clase “Trabajador” con las mismas propiedades que “Empleado”, pero que además
// tenga una propiedad llamada “proyectos”, que sea un array que contenga elementos de tipo string.

// Además implementar la clase “Ingeniero”, con las mismas propiedades que la clase “Trabajador” y que sobre
// escriba la propiedad “departamento” por ingeniería.

class Empleado {
  constructor(nombre, departamento) {
    this.nombre = nombre;
    this.departamento = departamento;
  }
}

class Director extends Empleado {
  constructor(informes, nombre, departamento) {
    super(nombre, departamento);
    this.informes = informes;
  }
}

class Trabajador extends Empleado {
  constructor(proyectos, nombre, departamento) {
    super(nombre, departamento);
    this.proyectos = proyectos;
  }
}

class Ingeniero extends Trabajador {
  constructor(proyectos, nombre) {
    super(proyectos, nombre);
    this.departamento = "ingenieria";
  }
}

const a = new Ingeniero(["awefds", "sdsdgv"], "aa");
console.log(a);

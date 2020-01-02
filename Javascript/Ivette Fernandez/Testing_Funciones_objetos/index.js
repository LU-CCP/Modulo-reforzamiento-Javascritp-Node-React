const retornarNElementos = (array, n) => {
  let array2 = [];

  for (let i = 0; i < n; i++) {
    array2 = [...array2, array[i]];
  }
  return array2;
};

const retornaKeys = objeto => {
  return Object.keys(objeto);
};

const retornaCambio = (string, rango) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array[i] = string.charAt(i);
    for (let j = rango[0]; j <= rango[1]; j++) {
      array[j] = "#";
    }
  }

  return array.join("");
};
const objeto = {
  nombre: "hola",
  edad: "24"
};
var array = [1, 2, 3, 4, 5, 6, 1, 2];
var arr = "abcdefgh";
var string = "modo";
var rango = [1, 3];
// console.log(retornarNElementos(array, 4));
// console.log(retornaKeys(objeto));
// console.log(retornaCambio(arr, rango));

const subArrays = (array, n, k) => {
  let copia = [...array];
  let i = 0;
  let nuevoArray = [];
  let final = [];

  while (copia.length != 0) {
    nuevoArray[i] = retornarNElementos(copia, n);
    i++;
    copia.shift();
  }

  for (let m = 0; m < nuevoArray.length; m++) {
    let suma = 0;
    for (let j = 0; j <= n; j++) {
      suma = suma + nuevoArray[m][j];
      if (suma == k) {
        final.push(nuevoArray[m]);
      }
    }
  }
  return final;
};

const position = string => {
  let stringToArray = [];
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    stringToArray[i] = string.charAt(i); // puede hacerse con string.substr(i,1)
    obj[stringToArray[i]]
      ? obj[stringToArray[i]].push(i)
      : (obj[stringToArray[i]] = [i]);
  }

  return obj;
};
//console.log(subArrays(array, 2, 7));
//console.log(position(string));

const comparaObj = (obj1, obj2) => {
  var propertiesObj2 = Object.keys(obj2);

  for (let i = 0; i < propertiesObj2.length; i++) {
    if (obj2[propertiesObj2[i]] == obj1[propertiesObj2[i]]) {
      return true;
    } else {
      return false;
    }
  }
};
let obj1 = {
  nombre: "hola",
  edad: "24"
  // nike: "cero"
};

let obj2 = {
  nombre: "hola",
  edad: "24"
};
//console.log(comparaObj(obj1, obj2));

class Empleado {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

class Diretor extends Empleado {
  constructor(name = "", department = "", informes = [""]) {
    super(name, department);
    this.informes = informes;
  }
}

class Trabajador extends Empleado {
  constructor(name, department, proyectos = [""]) {
    super(name, department);
    this.proyectos = proyectos;
  }
}

class Ingeniero extends Trabajador {
  constructor(name, department, proyectos) {
    super(name, (department = "Ingeniería"), proyectos);
  }
}

console.log(new Ingeniero("hola", "no", "se"));

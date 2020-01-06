let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const funcion = (array, n) => {
  if (n) {
    for (let i = 0; i < n; i++) {
      console.log(array[i]);
    }
  } else {
    console.log(array[0]);
  }
};

//funcion(array,3)

//ejercicio 2
const perros = {
  nombre: "comenunca",
  edad: 12,
  raza: "quilterrier"
};

const retornaKey = obj => {
  let keys = [];

  keys.push(Object.keys(obj));
  console.log(keys);
};

//retornaKey(perros);

const remplaza = (string, rango) => {
  let remplazado = "";
  r = false;

  for (let i = 0; i < string.length; i++) {
    let letra = string.charAt(i);
    if (letra == rango[0]) {
      r = true;
    }
    if (letra == rango[2]) {
      r = false;
    }

    if (r == true) {
      letra = "#";
    }

    remplazado = remplazado + letra;
  }

  console.log(remplazado);
};

remplaza("hola mundo", "l-m");

const sConsecutiva = (array, numero, k) => {
  let sm = 0;
  let sa = [];
  let res = [];

  for (let i = 0; i < array.length; i++) {
    sa = array.slice(i, i + numero);

    for (x = 0; x < sa.length; x++) {
      sm = sm + sa[x];
    }
    console.log("suma: " + sm);
    if (sm == k) {
      res.push(sa);
    }

    sm = 0;
  }

  console.log(res);
};

let array = [2, 4, 3, 5, 4, 3, 4, 3, 6, 3, 3, 3];

//sConsecutiva(array, 3, 12);

const mapeoDePalabras = palabra => {
  let obj = {};

  for (i = 0; i < palabra.length; i++) {
    let letra = palabra.substr(i, 1);
    //let p = palabra.indexOf(letra);
    obj[letra] ? obj[letra].push(i) : (obj[letra] = [i]);
  }

  return obj;
};

console.log(mapeoDePalabras("dodo"));

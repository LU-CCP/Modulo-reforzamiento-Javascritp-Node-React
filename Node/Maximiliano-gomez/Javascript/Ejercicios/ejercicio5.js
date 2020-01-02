let texto = "dodo";

//const
const mapeoDePalabras = string => {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    letra = string.substr(i, 1);
    // posicion = string.indexOf(string.substr(i, 1));
    obj[letra] ? obj[letra].push(i) : (obj[letra] = [i]);
  }
  return obj;
};

console.log(mapeoDePalabras(texto));

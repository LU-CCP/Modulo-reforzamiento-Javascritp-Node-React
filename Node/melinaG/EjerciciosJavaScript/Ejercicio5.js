function mapeo(palabra) {
  let objeto = {};
  for (i = 0; i < palabra.length; i++) {
    let letra = palabra.substr(i, 1);
    objeto[letra] ? objeto[letra].push(i) : (objeto[letra] = [i]);
  }
  return objeto;
}
console.log(mapeo("hoola"));

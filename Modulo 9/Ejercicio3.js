const string = "JorgeGajardo";
let stringAux = "";
const range = "g-j";
const reemplazar = (string, range) => {
  for (let index = 0; index < string.length; index++) {
    console.log(string.charAt(index), range.charAt(0));
    if (string.charAt(index) == range.charAt(0)) {
      do {
        stringAux += "#";
        index++;
      } while (string.charAt(index) != range.charAt(2));
    } else {
      stringAux += string.charAt(index);
    }
  }
  return stringAux;
};

console.log(reemplazar(string, range));

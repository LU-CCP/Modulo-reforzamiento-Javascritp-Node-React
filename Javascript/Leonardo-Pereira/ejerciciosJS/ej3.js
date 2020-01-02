let a = {
  n: "hola",
  x: "s",
  d: "tttt"
};
let b = {
  n: "hola",
  x: "s"
};

const quitaLlaves = string => {
  let cambiado = "";

  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) != "{" && string.charAt(i) != "}") {
      cambiado = cambiado + string.charAt(i);
    }
  }

  return cambiado;
};
const Compara = (obj1, obj2) => {
  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);

  let s1 = quitaLlaves(str1);
  let s2 = quitaLlaves(str2);

  if (s1.includes(s2)) {
    console.log("iguales we");
    return true;
  } else {
    console.log("nop");
    return false;
  }
};

Compara(a, b);

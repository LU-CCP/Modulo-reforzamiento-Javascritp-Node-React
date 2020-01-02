//2.	Crear una función que retorne en un array las keys de un objeto.

const arboles = {
  Reino: "Plantae",
  Subreino: "Spermatophyta",
  Superdivisión: "Gymnospermae",
  División: "Pinophyta",
  Clase: "Pinopsida",
  Orden: "Pinales",
  Familia: "Araucariaceae",
  Género: "Araucaria",
  Especie: "Araucaria araucana"
};

const arrKeys = objeto => {
  let arrKey = Object.keys(objeto);
  return arrKey;
};

console.log(arrKeys(arboles));

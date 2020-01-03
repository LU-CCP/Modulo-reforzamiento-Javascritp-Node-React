const obj = { nombre: "Jorge", ApellidoP: "Gajardo", ApellidoM: "Reyes" };
let keys = [];
const retornaKeys = obj => {
  keys = Object.keys(obj);
  return keys;
};
console.log(retornaKeys(obj));

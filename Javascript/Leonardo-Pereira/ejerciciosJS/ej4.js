//clases y herencias en js

class Empleado {
  constructor(nombre, departamento) {
    (this.nombre = nombre), (this.departamento = departamento);
  }
}

class Director extends Empleado {
  constructor(nombre, departamento, informes) {
    this.informes = informes;
    super(nombre, departamento);
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
    super(nombre, proyectos);
    this.departamento = "ingeneria";
  }
}

let a = new Trabajador("hola", "xd", [1, 2, 3, 4, 5]);
let b = new Ingeniero("leo", [1, 2]);
console.log(b);

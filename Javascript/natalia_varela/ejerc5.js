class Empleado {
  constructor(nombre, departamento) {
    this.nombre = nombre;
    this.departamento = departamento;
  }
}
class Director extends Empleado {
  constructor(nombre, departamento, informes) {
    super(nombre, departamento);
    this.informes = informes;
  }
}
class Trabajador extends Empleado {
  constructor(nombre, departamento, proyectos) {
    super(nombre, departamento);
    this.proyectos = proyectos;
  }
}
class Ingeniero extends Empleado {
  constructor(nombre, departamento, departamento) {
    super(nombre, departamento);
    this.departamento = "Ingenieria";
  }
}

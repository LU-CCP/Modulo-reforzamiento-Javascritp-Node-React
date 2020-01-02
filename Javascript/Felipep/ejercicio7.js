class Empleado {
  constructor(nombre = "", departamento = "") {
    this.nombre = nombre;
    this.departamento = departamento;
  }
}

class Director extends Empleado {
  constructor(nombre = "", departamento = "", informes = [""]) {
    super(nombre, departamento);
    this.informes = informes;
  }
}
class Trabajador extends Empleado {
  constructor(informes = [""], proyectos = [""]) {
    super(informes);
    this.proyectos = proyectos;
  }
}

class Ingeniero extends Trabajador {
  constructor(proyectos = [""]) {
    super(proyectos);
    this.departamento = "Ingenieria";
  }
}

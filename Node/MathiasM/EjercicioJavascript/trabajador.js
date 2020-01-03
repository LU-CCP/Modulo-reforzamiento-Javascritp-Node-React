class Trabajador extends Empleado {
  constructor(nombre, departamento, proyectos) {
    super(nombre, departamento, proyectos);
    this.proyectos = proyectos;
  }
}

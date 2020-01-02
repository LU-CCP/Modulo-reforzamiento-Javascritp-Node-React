class Director extends Empleado {
  constructor(nombre, departamento, informes) {
    super(nombre, departamento, informes);
    this.informes = informes;
  }
}

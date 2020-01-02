// Implementar una clase “Empleado” con las siguientes propiedades: “nombre” y “departamento” de tipo string.
//  También queremos implementar una clase “Director”, que tenga las mismas propiedades que “Empleado”, pero 
//  además que tenga una propiedad llamada “informes”, que sea un array que contenga elementos de tipo string.

// También queremos implementar la clase “Trabajador” con las mismas propiedades que “Empleado”, pero que 
// además tenga una propiedad llamada “proyectos”, que sea un array que contenga elementos de tipo string.

// Además implementar la clase “Ingeniero”, con las mismas propiedades que la clase “Trabajador” y que sobre 
// escriba la propiedad “departamento” por ingeniería.
 
class Empleado{
    constructor(nombre, departamento) 
    {
        this.nombre = "nombre";
        this.departamento = "nombre";
    }
}

class Director extends Empleado{
   constructor(nombre,departamento, informes){
    super(nombre, departamento);
    this.informes = Array.isArray(informes) ? informes : []
   }

}
class Trabajador extends Empleado{
    constructor(nombre,departamento, proyectos){
     super(nombre, departamento);
     this.proyectos = Array.isArray(proyectos) ? proyectos : []
    }
 
 }
  
angular
  .module('app')
  .factory('ServAltaEmpleado', function (ServAltaEmpleadoBase) {
   
    var objeto = {};
    objeto.nombre = "AltaEmpleado";
    objeto.AltaEmpleado = AltaEmpleado;
    return objeto;

 
    function AltaEmpleado(emp)
    {

      return ServAltaEmpleadoBase.AltaEmpleado(emp);
    };


 


  })//Cierra factory

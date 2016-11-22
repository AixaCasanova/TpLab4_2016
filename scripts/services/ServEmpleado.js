angular
  .module('app')
  .factory('ServEmpleado', function (ServEmpleadoBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerEmp = TraerEmp;
   
    return objeto;

 
    function TraerEmp(){
     console.info("desde la factory con servicio",ServEmpleadoBase);
     return ServEmpleadoBase.TraerEmp();

    };


 


  })//Cierra factory

angular
  .module('app')
  .factory('ServModifEmp', function (ServModifEmpBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.ModifEmpleado = ModifEmpleado;
   
    return objeto;

 
    function ModifEmpleado(emp){
     console.info("desde la factory con servicio",ServModifEmpBase);
     return ServModifEmpBase.ModifEmpleado(emp);

    };


 


  })//Cierra factory

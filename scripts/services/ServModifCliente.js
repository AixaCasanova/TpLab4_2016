angular
  .module('app')
  .factory('ServModifCliente', function (ServModifClienteBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.ModiCliente = ModiCliente;
   
    return objeto;

 
    function ModiCliente(cliente){
     console.info("desde la factory con servicio",ServModifClienteBase);
     return ServModifClienteBase.ModiCliente(cliente);

    };


 


  })//Cierra factory

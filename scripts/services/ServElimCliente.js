angular
  .module('app')
  .factory('ServElimCliente', function (ServElimClienteBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.ElimCliente = ElimCliente;
   
    return objeto;

 
    function ElimCliente(cliente){
     console.info("desde la factory con servicio",ServElimClienteBase);
     return ServElimClienteBase.ElimCliente(cliente);

    };


 


  })//Cierra factory

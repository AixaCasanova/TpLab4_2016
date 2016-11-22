angular
  .module('app')
  .factory('ServAltaCliente', function (ServAltaClienteBase) {
   
    var objeto = {};
    objeto.nombre = "AltaCliente";
    objeto.AltaCliente = AltaCliente;
    return objeto;

 
    function AltaCliente(cliente)
    {

      return ServAltaClienteBase.AltaCliente(cliente);
    };


 


  })//Cierra factory

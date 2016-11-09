angular
  .module('app')
  .factory('ServCliente', function (ServClienteBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerCliente = TraerCliente;
   
    return objeto;

 
    function TraerCliente(){
     console.info("desde la factory con servicio",ServClienteBase);
     return ServClienteBase.TraerCliente();

    };


 


  })//Cierra factory

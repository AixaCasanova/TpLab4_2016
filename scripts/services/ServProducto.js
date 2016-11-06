angular
  .module('app')
  .factory('ServProducto', function (ServProductoBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerTodos = TraerTodos;
   
    return objeto;

 
    function TraerTodos(){
     console.info("desde la factory con servicio",ServProductoBase);
     return ServProductoBase.TraerTodos();

    };


 


  })//Cierra factory

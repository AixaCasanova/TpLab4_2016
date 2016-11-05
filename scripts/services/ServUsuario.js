angular
  .module('app')
  .factory('ServUsuario', function (ServUsuarioBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerTodos = TraerTodos;
   
    return objeto;

 
    function TraerTodos(){
     console.info("desde la factory con servicio",ServUsuarioBase);
     return ServUsuarioBase.TraerTodos();

    };


 


  })//Cierra factory

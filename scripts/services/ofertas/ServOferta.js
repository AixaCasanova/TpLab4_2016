angular
  .module('app')
  .factory('ServOferta', function (ServOfertaBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerTodos = TraerTodos;
    objeto.TraerListaSuc=TraerListaSuc;
   
    return objeto;

 
    function TraerTodos(){
     
     return ServOfertaBase.TraerTodos();

    };


    function TraerListaSuc(){
       return ServOfertaBase.TraerListaSuc();

    };

 


  })//Cierra factory

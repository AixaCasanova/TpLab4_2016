angular
  .module('app')
  .factory('factorybddCliente', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddCliente";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/clientes"
    return objeto;


    function TraerCliente(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta.data);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }
  })//Cierra factory

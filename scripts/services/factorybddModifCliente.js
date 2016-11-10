angular
  .module('app')
  .factory('factorybddModifCliente', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddModifCliente";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/ModifClie"
    return objeto;


    function TraerCliente(cliente){
      return $http.post(TraerUrl(cliente)).then(
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

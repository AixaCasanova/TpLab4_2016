angular
  .module('app')
  .factory('factorybddAltaCliente', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddAltaCliente";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/AltaClientes"
    return objeto;


    function AltaCliente(cliente){
      return $http.post(TraerUrl(cliente)).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }
  })//Cierra factory

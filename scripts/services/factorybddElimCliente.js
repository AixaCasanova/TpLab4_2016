angular
  .module('app')
  .factory('factorybddElimCliente', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddElimCliente";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/ElimClie"
    return objeto;


    function ElimCliente(cliente){
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

angular
  .module('app')
  .factory('factorybdd', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/usuarios"
    return objeto;


    function TraerTodos(){
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

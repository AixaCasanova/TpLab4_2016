angular
  .module('app')
  .factory('factorybddModifEmpleado', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddModifEmpleado";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/ModifUs"
    return objeto;


    function ModifEmpleado(emp){
      return $http.post(TraerUrl(emp)).then(
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

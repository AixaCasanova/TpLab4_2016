angular
  .module('app')
  .factory('factorybddEmpleado', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddEmpleado";
 
    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/empleados"
    return objeto;


    function TraerEmp(){
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

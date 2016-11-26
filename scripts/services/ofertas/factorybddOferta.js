angular
  .module('app')
  .factory('factorybddOferta', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/ofertas"
    objeto.Api2 ="http://localhost:8026/TpLab4_2016/ws/sucursales";
    return objeto;

   function TraerListaSuc(){
        return $http.get(TraerUrl()).then(
        function (respuesta){
        console.info("resp factory suc:",respuesta);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

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

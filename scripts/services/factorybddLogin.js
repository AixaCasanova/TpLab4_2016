angular
  .module('app')
  .factory('factorybddLogin', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddLogin";

    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/login";
    return objeto;


    function TraerUnLogin(pers){
      console.info("desdefacttory:",pers);
      return $http.post(TraerUrl(pers)).then(
        function (respuesta){
          console.info("desde factorybddLogin",respuesta);
          console.info(respuesta.data);
          return respuesta.data;
        },
        function (error){
          console.info("errordefactory:",error);
          return error;
        }
        );
    }
  })//Cierra factory

angular
  .module('app')
  .factory('factorybddSucursales', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/sucursales";
    objeto.Api2 ="http://localhost:8026/TpLab4_2016/ws/sucursalesUp";
    objeto.Api3 ="http://localhost:8026/TpLab4_2016/ws/OfertasDeSucursal";
    /*objeto.Api2 ="http://localhost:8026/TpLab4_2016/ws/ModifP";
    objeto.Api3 ="http://localhost:8026/TpLab4_2016/ws/ElimP";
    objeto.Api4 ="http://localhost:8026/TpLab4_2016/ws/AltaP";*/
    return objeto;


    function TraerTodos(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    function InsertarLocal(img){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    function TraerMisOfertas(loc){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }
  /*

        function AltaP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {
             
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }

        //------------

         

        function EliminarP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {

              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }
    
        
        function ModifP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {
              
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }
    
*/
  })//Cierra factory

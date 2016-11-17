angular
  .module('app')
  .factory('factorybddPedido', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://localhost:8026/TpLab4_2016/ws/pedidos";
    objeto.Api2 ="http://localhost:8026/TpLab4_2016/ws/ModifPed";
    objeto.Api3 ="http://localhost:8026/TpLab4_2016/ws/ElimPed";
    objeto.Api4 ="http://localhost:8026/TpLab4_2016/ws/AltaPed";
    objeto.Api5 ="http://localhost:8026/TpLab4_2016/ws/productos";
    objeto.Api6 ="http://localhost:8026/TpLab4_2016/ws/pedidosDT";
    
    return objeto;


    function TraerTodosD(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
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
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

      function TraerP(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

  

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
    

  })//Cierra factory

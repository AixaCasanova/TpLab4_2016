angular
  .module('app')
  .factory('factorybddEmpleado', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddEmpleado";
 

  objeto.Api5 ="http://localhost:8026/TpLab4_2016/ws/sucursales";
  objeto.Api ="http://localhost:8026/TpLab4_2016/ws/empleados";
  objeto.Api2 ="http://localhost:8026/TpLab4_2016/ws/ModifUs";
  objeto.Api3 ="http://localhost:8026/TpLab4_2016/ws/ElimUs";
  objeto.Api4 ="http://localhost:8026/TpLab4_2016/ws/AltaUs";

    return objeto;


    function TraerEmp(){
        return $http.get(TraerUrl()).then(
        function (respuesta){
 
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


    function TraerListaSuc(){
        return $http.get(TraerUrl()).then(
        function (respuesta){
 
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }



      function ModifEmp(empleado){
     
      return $http.post(TraerUrl(empleado)).then(
        function (respuesta){
      
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    

      function ElimEmp(empleado){
     
      return $http.post(TraerUrl(empleado)).then(
        function (respuesta){
      
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

      function AltaEmpleado(cliente){
      return $http.post(TraerUrl(cliente)).then(
        function (respuesta){
          
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


    
  })//Cierra factory

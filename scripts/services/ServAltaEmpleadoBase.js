angular
  .module('app')
  .service('ServAltaEmpleadoBase', function ($http,factorybddAltaEmpleado)
   {
        var url = factorybddAltaEmpleado.Api;
        console.info(url);
        //Esta funcion es privada
        function TraerUrl(parametro){
          if (!parametro)
            return url;
          else
            return url + "/" + parametro;
        }
      
        this.AltaEmpleado =function(emp){
            
          return $http.post(TraerUrl(emp)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }



  })//Cierra Servicio

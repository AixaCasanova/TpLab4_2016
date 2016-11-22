angular
  .module('app')
  .service('ServAltaClienteBase', function ($http,factorybddAltaCliente)
   {
        var url = factorybddAltaCliente.Api;
        console.info(url);
        //Esta funcion es privada
        function TraerUrl(parametro){
          if (!parametro)
            return url;
          else
            return url + "/" + parametro;
        }
      
        this.AltaCliente =function(cliente){
            
          return $http.post(TraerUrl(cliente)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }



  })//Cierra Servicio

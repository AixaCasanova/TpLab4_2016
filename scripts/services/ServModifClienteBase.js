angular
  .module('app')
  .service('ServModifClienteBase', function ($http,factorybddModifCliente) {
    this.Nombre = "factorybddModifCliente";
 
    var url = factorybddModifCliente.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }
  
    this.ModiCliente =function(cliente){
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

angular
  .module('app')
  .service('ServElimClienteBase', function ($http,factorybddElimCliente) {
    this.Nombre = "factorybddModifCliente";
 
    var url = factorybddElimCliente.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }
  
    this.ElimCliente =function(cliente){
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

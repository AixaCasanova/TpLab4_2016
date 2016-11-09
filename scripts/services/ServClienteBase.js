angular
  .module('app')
  .service('ServClienteBase', function ($http,factorybddCliente) {
    this.Nombre = "ServClienteBase";
 
    var url = factorybddCliente.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }
  
    this.TraerCliente =function(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          console.info("desde serv usuario base",respuesta);
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }

  })//Cierra Servicio

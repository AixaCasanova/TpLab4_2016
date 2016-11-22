angular
  .module('app')
  .service('ServUsuarioBase', function ($http,factorybdd) {
    this.Nombre = "ServUsuarioBase";
 
    var url = factorybdd.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }

    this.TraerTodos =function(){
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

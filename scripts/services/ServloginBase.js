angular
  .module('app')
  .service('ServloginBase', function ($http,factorybddLogin) {
 
 
    var url = factorybddLogin.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }

    this.TraerUnLogin=function(pers){
      console.info("dese serloginbase:",pers);
      return $http.post(TraerUrl(pers)).then(
        function (respuesta){
          console.info("desde ServloginBase",respuesta);
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }

  })//Cierra Servicio

angular
  .module('app')
  .service('ServEmpleadoBase', function ($http,factorybddEmpleado) {
    this.Nombre = "ServEmpleadoBase";
 
    var url = factorybddEmpleado.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }
  
    this.TraerEmp =function(){
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

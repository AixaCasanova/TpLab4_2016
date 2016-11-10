angular
  .module('app')
  .service('ServModifEmpBase', function ($http,factorybddModifEmpleado) {
    this.Nombre = "factorybddModifEmpleado";
 
    var url = factorybddModifEmpleado.Api;
    console.info(url);
    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }
  
    this.ModifEmpleado =function(emp){
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

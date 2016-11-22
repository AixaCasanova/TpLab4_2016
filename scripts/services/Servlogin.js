angular
  .module('app')
  .factory('Servlogin', function (ServloginBase) {
   
    var objeto = {};
    objeto.nombre = "Servlogin";
    objeto.TraerUnLogin = TraerUnLogin;
    return objeto;

 
    function TraerUnLogin(pers)
    {
      console.info("desde servlogin",ServloginBase);
      return ServloginBase.TraerUnLogin(pers);
    };


 


  })//Cierra factory

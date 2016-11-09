angular
  .module('app')
  .controller('CtrolLogin', function($scope, data, Servlogin, i18nService, uiGridConstants,$auth) 
  {
      $scope.usuario={};
      $scope.usuario.mail="AIXA@MAIL.COM";
      $scope.usuario.pass="123456";
      $scope.usuario.tipo="";
      $scope.usuario.foto="";
      console.log("llego?");
      $scope.ver=true;
      
       if ($auth.isAuthenticated()) 
       {
          console.info("token",$auth.getPayload());
          $scope.ver=false;
          $scope.resp="logueado";
       }else{
          $scope.ver=true;
          $scope.resp="Deslogueado";
       } 


       $scope.authenticate = function(provider)
       {
          $auth.authenticate(provider);
          console.info("Provider:",provider);
        };
            

      $scope.loguer=function()
      {

          Servlogin.TraerUnLogin($scope.usuario.mail).then(
          function(respuesta)
          {
            
            if (respuesta.mail == $scope.usuario.mail && respuesta.password == $scope.usuario.pass) 
            {
              console.log("coincinde!");
              $scope.ver=false; 
              $scope.resp="Logueado"; 

              $scope.usuario.foto=respuesta.foto;

              
              
              console.info("que hay en auth:",$auth);
              console.info("token",$auth.getPayload());
              $auth.login(respuesta)
              .then(function(response) 
              {
                console.info("correcto",response);

                //------------------
                if ($auth.isAuthenticated()) {
                  console.info("token",$auth.getPayload());
                }else{
                  console.info("notoken",$auth.getPayload());
                }
                //----------------------------- 
              })  
              .catch(function(response) {
                  console.info("no volvio bien auth: ",response);
              });

            }else
            {
              console.log("no coincinde!");
              alert("usuario o contraseña invalidos!");  
            }

          })       
      }


     $scope.Desloguear=function()
      {   
        $auth.logout();
        $scope.resp="Deslogueado";   
        $scope.ver=true;   
      }

})

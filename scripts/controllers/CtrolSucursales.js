angular
  .module('app')
  .controller('CtrolSucursales', function($scope,$rootScope, $auth,  data, $auth,$stateParams,$state, ServSucursales, i18nService, uiGridConstants)
   {

 //-------------------

 
      if ($auth.isAuthenticated()) 
      {    
          var datos=$auth.getPayload();
          $scope.ver=true;
          $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
           $rootScope.SeVe=true;
          $rootScope.userAVer="Bienvenido "+ datos['nombre'];

          if (datos['perfil'] == "administrador") 
          {
              console.info("datos.perfil: ",datos['perfil'])
              $rootScope.esEnc=true;
              $rootScope.esAdmin=true;
              $rootScope.esVend=true;
          }else if (datos['perfil'] == "comprador") 
          {
              $rootScope.esAdmin=false;
              $rootScope.esVend=false;
              $rootScope.esEnc=false;
          }else if (datos['perfil'] == "encargado") 
          {
              $rootScope.esAdmin=false;
              $rootScope.esVend=true;
              $rootScope.esEnc=true;
          }else if (datos['perfil'] == "vendedor")
          {
              $rootScope.esAdmin=false;         
              $rootScope.esVend=true;
              $rootScope.esEnc=false;       
          }else
          {
            $scope.ver=false;
            console.info("llega al ctrol gral?3")
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
          }
      }

 //----------------------

   ServSucursales.TraerTodos().then(function(resp)
      {
       	 
      	   	$scope.List={};
      	   	var lst=[];
      	   	var pos=0;
    
        resp.forEach(function(suc){

        	if (suc.nombre!="NoAplica") {
        		 
       
        		lst.push(suc);
        		
        	}
 
        })
        $scope.List=lst;

  		
   
       }) ;


})

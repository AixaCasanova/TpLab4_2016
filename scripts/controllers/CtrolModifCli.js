angular
  .module('app')
  .controller('CtrolModifCli', function($scope, data, $state, ServModifCliente ,i18nService, $stateParams,uiGridConstants) {
    // $scope.titulo = "Configuracion Campos";
 
    // console.log("controller");
    console.info($stateParams['parametro']);
    var ObjRecibido=$stateParams['parametro'];
    console.info(ObjRecibido.nombre);


        $scope.usuario={};
        $scope.usuario.nombre=ObjRecibido.nombre;
        $scope.usuario.apellido=ObjRecibido.apellido;
        $scope.usuario.mail=ObjRecibido.mail;
        $scope.usuario.dir=ObjRecibido.direccion;
        $scope.usuario.tel=ObjRecibido.telefono;
        $scope.usuario.pass=ObjRecibido.password;
        $scope.usuario.estado = ObjRecibido.estado;
        
  

      $scope.ModifC=function()
      {
          ServModifCliente.ModiCliente(JSON.stringify($scope.usuario)).then(function(resp)
            {
                console.info("desde constroller",resp);
                $state.go("clientes");
                
            })
           
      }


  })

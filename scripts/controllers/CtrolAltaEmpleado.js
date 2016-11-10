angular
  .module('app')
  .controller('CtrolAltaEmpleado', function($scope, data, $state ,ServAltaEmpleado, i18nService, uiGridConstants,$auth) 
  {
    
        $scope.usuario={};
        $scope.usuario.nombre="aixa";
        $scope.usuario.apellido="casanova";
        $scope.usuario.mail="mail@MAIL.COM";
        $scope.usuario.dir="calle falsa 123";
        $scope.usuario.tel=123456;
        $scope.usuario.pass="123456";
        $scope.usuario.passRep="123456";
        $scope.usuario.estado = "H";
        $scope.usuario.tipo="E";
        $scope.usuario.suc="";
      
 
      $scope.AltaEmpleado=function()
      {
          ServAltaEmpleado.AltaEmpleado(JSON.stringify($scope.usuario)).then(function(resp)
            {
                console.info("desde constroller",resp);
                $state.go("empleados");
            })
           
      }


    

})

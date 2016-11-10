angular
  .module('app')
  .controller('CtrolEmpleados', function($scope, $state ,data, ServEmpleado, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
 
    console.log("controller");
    
    $scope.gridOptionsEmpleados = {};
    $scope.gridOptionsEmpleados.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsEmpleados.paginationPageSize = 25;
    $scope.gridOptionsEmpleados.columnDefs = columnDefs();
    $scope.gridOptionsEmpleados.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServEmpleado.TraerEmp().then(function(resp){
       $scope.gridOptionsEmpleados.data=resp;
        console.info("desde constroller",resp);
  
     });
      
      $scope.ModificarEmp = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("ModifEmp",{parametro:parametro});
      }
      
       $scope.EliminarEmp = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarEmp",{parametro:parametro});
      }

  
    function columnDefs () {
      return [
         { field: 'nombre', name: 'nombre', width: 120
          ,enableFiltering: false
        },
         { field: 'apellido', name: 'apellido', width: 120
          ,enableFiltering: false
        },
         { field: 'direccion', name: 'direccion', width: 120
          ,enableFiltering: false
        },
         { field: 'mail', name: 'mail', width: 120
          ,enableFiltering: false
        },
         { field: 'telefono', name: 'telefono', width: 120
          ,enableFiltering: false
        },
         { field: 'tipo', name: 'tipo', width: 120
          ,enableFiltering: false
        },
          { field: 'estado', name: 'estado', width: 120
          ,enableFiltering: false
        },
          { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" ng-click="grid.appScope.ModificarEmp(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" ng-click="grid.appScope.EliminarEmp(row.entity)">'},
        


      ];
    };
  })

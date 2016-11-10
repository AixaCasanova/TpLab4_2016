angular
  .module('app')
  .controller('CtrolClientes', function($scope, data, ServCliente,$state, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
 
    console.log("controller");
    
    $scope.gridOptionsClientes = {};
    $scope.gridOptionsClientes.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsClientes.paginationPageSize = 25;
    $scope.gridOptionsClientes.columnDefs = columnDefs();
    $scope.gridOptionsClientes.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServCliente.TraerCliente().then(function(resp){
       $scope.gridOptionsClientes.data=resp;
        console.info("desde constroller",resp);
  
     });
 

      $scope.ModificarCli = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("ModifCli",{parametro:parametro});
      }
      
       $scope.EliminarCli = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarCli",{parametro:parametro});
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
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" ng-click="grid.appScope.ModificarCli(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" ng-click="grid.appScope.EliminarCli(row.entity)">'},
        


      ];
    };
  })

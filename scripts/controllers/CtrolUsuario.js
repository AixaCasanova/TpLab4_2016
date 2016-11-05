angular
  .module('app')
  .controller('CtrolUsuario', function($scope, data, ServUsuario, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
 
    console.log("controller");
    
    $scope.gridOptionsUsuarios = {};
    $scope.gridOptionsUsuarios.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsUsuarios.paginationPageSize = 25;
    $scope.gridOptionsUsuarios.columnDefs = columnDefs();
    $scope.gridOptionsUsuarios.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServUsuario.TraerTodos().then(function(resp){
       $scope.gridOptionsUsuarios.data=resp;
        console.info("desde constroller",resp);
  
     });
 

  
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


        //---------------
      ];
    };
  })

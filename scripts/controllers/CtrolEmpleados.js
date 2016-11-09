angular
  .module('app')
  .controller('CtrolEmpleados', function($scope, data, ServEmpleado, i18nService, uiGridConstants) {
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


      ];
    };
  })

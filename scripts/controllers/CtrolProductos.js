angular
  .module('app')
  .controller('CtrolProductos', function($scope, data, ServProducto, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
 
    console.log("controller");
    
    $scope.gridOptionsProductos = {};
    $scope.gridOptionsProductos.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsProductos.paginationPageSize = 25;
    $scope.gridOptionsProductos.columnDefs = columnDefs();
    $scope.gridOptionsProductos.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServProducto.TraerTodos().then(function(resp){
       $scope.gridOptionsProductos.data=resp;
        console.info("desde constroller",resp);
  
     });
 

  
    function columnDefs () {
      return [
         { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
        },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
        },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
        }

      ];
    };
  })

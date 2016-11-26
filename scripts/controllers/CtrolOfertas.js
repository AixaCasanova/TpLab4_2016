angular
  .module('app')
  .controller('CtrolOfertas', function($scope,$rootScope,$stateParams, data, $auth, ServOferta, $state,i18nService, uiGridConstants) {
 
  //-------------------

            $scope.gridOptionsOfertas = {};
            $scope.gridOptionsOfertas.paginationPageSizes = [25, 50, 75];
            $scope.gridOptionsOfertas.paginationPageSize = 25;
            $scope.gridOptionsOfertas.enableFiltering = true;
            i18nService.setCurrentLang('es');
            $scope.gridOptionsOfertas.columnDefs = columnDefs2s();

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
 
    $scope.of={};
    console.info("parametros",$stateParams);  
     if ($stateParams['parametro'] != null ) 
      {
        var ObjRecibido=$stateParams['parametro'];
        console.info(ObjRecibido);
        $scope.of.id_producto=ObjRecibido.id_producto;
        $scope.of.descripcion=ObjRecibido.descripcion;
        $scope.of.precio=ObjRecibido.precio;
        $scope.SucElegida=ObjRecibido.sucursal;
      }
      else{
        $scope.of.descripcion="Desc1";
        $scope.of.precio=10;
      }
 

 //----------------------
    
   ServOferta.TraerListaSuc().then(function(resp){

            $scope.Lsucursales=resp;   
            console.info("sucur",resp); 
            $scope.Lsucursales=resp;
      
         });


      ServOferta.TraerTodos().then(function(resp){
       $scope.gridOptionsOfertas.data=resp;
      
  
     });
 

       $scope.Volver=function()
            {
              $state.go("ofertas");
            }

    

        $scope.IrModificar = function(parametro)
          {
            
            $state.go("ModifOf",{parametro:parametro});
          }
           
        $scope.IrEliminar = function(parametro)
          {
            //console.info(parametro['nombre']);            
            $state.go("EliminarOf",{parametro:parametro});
          } 

    function columnDefs2s(){
      return [
         { field: 'id_oferta', name: 'id_oferta', width: 120
          ,enableFiltering: false
        },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
        },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
        },
         { field: 'sucursal', name: 'sucursal', width: 120
         ,enableFiltering: true

        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" class="btn btn-warning" ng-click="grid.appScope.IrModificar(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.IrEliminar(row.entity)">'}
          

      ];
    };

  
    function columnDefs () {
      return [
         { field: 'id_oferta', name: 'id_oferta', width: 120
          ,enableFiltering: false
        },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
        },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
        },
         { field: 'sucursal', name: 'sucursal', width: 120
         ,enableFiltering: true

        }

      ];
    };
  })

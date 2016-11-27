angular
  .module('app')
  .controller('CtrolSucursales', function($scope,$rootScope, $auth,  data, $auth,FileUploader,$stateParams,$state, ServSucursales, i18nService, uiGridConstants)
   {
    $scope.sucursal={};
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
            
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
          }
      }

  //----------------------------------

  $scope.gridOptionsSucurs = {};
  $scope.gridOptionsSucurs.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsSucurs.paginationPageSize = 25;
  $scope.gridOptionsSucurs.columnDefs=columnDefsSucursal();

 
 //----------------------

  if ($stateParams['parametro'] != null ) 
      {
        var ObjRecibido=$stateParams['parametro'];
        $scope.sucursal.id_sucursal=ObjRecibido.id_sucursal;
        $scope.sucursal.direccion=ObjRecibido.direccion;
        $scope.sucursal.nombre=ObjRecibido.nombre;
        $scope.sucursal.foto1=ObjRecibido.foto1;
        $scope.sucursal.foto2=ObjRecibido.foto2;
        $scope.sucursal.foto3=ObjRecibido.foto3;


      }
      else{
         
        $scope.sucursal.direccion="Belgrano 1260";
        $scope.sucursal.nombre="sucursal C";
        $scope.sucursal.fotos="";
 
        //$scope.uploader=new FileUploader({url:'http://localhost:8026/TpLab4_2016/ws/sucursalesFoto'});
        $scope.SubirdorArchivos=new FileUploader({url:'http://localhost:8026/TpLab4_2016/imagenes/'});

      }
 

 //----------------------------- verrr!!!
  $scope.SubirdorArchivos.onCompleteAll = function(item, response, status, headers) 
  {

      ServSucursales.InsertarLocal(JSON.stringify($scope.sucursal)) //+ JSON.stringify($scope.persona))
        .then(function(respuesta)
         {       
            //aca se ejetuca si retorno sin errores 
            console.info(respuesta);    
          },function errorCallback(response) 
          {        
            //aca se ejecuta cuando hay errores
            console.info(response);     

         });


    }





  $scope.Guardar=function()
  {
    if($scope.SubirdorArchivos.queue != undefined)
    {
      var nombreFoto="";
      for (i in $scope.SubirdorArchivos.queue)
       {
        if(nombreFoto != "")
        {
          nombreFoto = nombreFoto + ";" +($scope.SubirdorArchivos.queue[i]._file.name);
        }
        else
        {
          nombreFoto = ($scope.SubirdorArchivos.queue[i]._file.name);
        }
      }
      $scope.sucursal.fotos=nombreFoto;
    }
    $scope.SubirdorArchivos.uploadAll();
  }

 
//-------------------------------
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
        
       $scope.gridOptionsSucurs.data=$scope.List;
  		
   
       }) ;

 
    $scope.IrModificar = function(parametro)
      {

       
        $state.go("ModifSuc",{parametro:parametro});
      }
      
       $scope.IrEliminar = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarSuc",{parametro:parametro});
      }


   function columnDefsSucursal () {
      return [
         { field: 'id_sucursal', name: 'id_sucursal', width: 120
          ,enableFiltering: false
        },
         { field: 'direccion', name: 'direccion', width: 120
          ,enableFiltering: false
        },
         { field: 'nombre', name: 'nombre', width: 120
          ,enableFiltering: false
        },
        { field: 'foto1',  name: 'foto1', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\">",width: 120
          ,type: 'text'
          ,enableFiltering: false
        },
        { field: 'foto2',  name: 'foto2', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\">",width: 120
          ,type: 'text'
          ,enableFiltering: false
        },
         { field: 'foto3',  name: 'foto3', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\">",width: 120
          ,type: 'text'
          ,enableFiltering: false
        },      

            { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" class="btn btn-warning" ng-click="grid.appScope.IrModificar(row.entity)">'},
            { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.IrEliminar(row.entity)">'},
          

      ];
    }; 


})

angular
  .module('app')
  .controller('CtrolPedidos', function($scope,$rootScope, data,$auth, $auth,$stateParams,$state, ServPedido, i18nService, uiGridConstants)
   {
 
    var index = -1;
     var ListPr = [];
     var ListDetalle = [];
     var total=0;

     $scope.veoGrilla=false;

     $scope.gridOptionsPedidos = {};
      $scope.gridOptionsPedidos.width=10;
     $scope.gridOptionsPedidos.columnDefs = columnDefsCom();
    
      $scope.gridOptionsMisPedidos = {};
      $scope.gridOptionsMisPedidos.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsMisPedidos.paginationPageSize = 25;
      $scope.gridOptionsMisPedidos.columnDefs=columnDefs();

      $scope.gridOptionsTodosPedidos = {};
      $scope.gridOptionsTodosPedidos.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsTodosPedidos.paginationPageSize = 25;
      $scope.gridOptionsTodosPedidos.columnDefs=columnDefsTodos();
      
      
     $scope.gridOptionsMisProdPedidos = {};
     $scope.gridOptionsMisProdPedidos.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdPedidos.paginationPageSize = 25;

     $scope.gridOptionsMisProdPedidos2 = {};
     $scope.gridOptionsMisProdPedidos2.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdPedidos2.paginationPageSize = 25;

     $scope.gridOptionsMisProdSel = {};
     $scope.gridOptionsMisProdSel.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdSel.paginationPageSize = 25;
     $scope.gridOptionsMisProdSel.columnDefs=columnDefsPsel();

          ServPedido.TraerP().then(function(resp)
          {          
           
           $scope.gridOptionsPedidos.data=resp;    

          }) 
  

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
            
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
          }

 
          var ObjeJson={};
           var iduser= datos['id_user'];
          
           var Info1={};
           var Info2={};
           
           console.info(iduser);

            ServPedido.TraerTodos(iduser).then(function(resp)
            {

              console.info(resp);
              $scope.gridOptionsMisPedidos.data=resp;
              

             });

              if (datos['perfil'] != "comprador") {
                ServPedido.TraerTodos().then(function(resp)
                {
                  console.info(resp);
                  $scope.gridOptionsTodosPedidos.data=resp;
                }); 
              }
               
            }

        

        
      





         ServPedido.TraerListaSuc().then(function(resp){
          var lstS=[];
          resp.forEach(function(r){
                if(r.nombre!="NoAplica"){
                  lstS.push(r);
                }
              })
            $scope.Lsucursales=lstS;  
            $scope.SucEleg=$scope.Lsucursales[0].nombre;
          
         });


      
       
        $scope.agregar=function(parametro)
        {
          if(contains(ListPr,parametro)){
            ListPr[index].cant= ListPr[index].cant+1;
             
          }
          else{
            parametro.cant=1;
            ListPr.push(parametro); 
          }
                   
          $scope.gridOptionsMisProdSel.data=ListPr;
          
          index =-1;
        }

        var index;

        function contains(a, obj) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              index = i;
              return true;
            }
          }
          return false;
        }

                function contains2(a, obj) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              index = i;
              return true;
            }
          }
          return false;
        }
       
       $scope.EliminarPsel=function(param)
        {
          if(contains(ListPr,param)){
          
            if(ListPr[index].cant > 1){
                ListPr[index].cant= ListPr[index].cant-1;
             }  
             else if(ListPr[index].cant == 1){
                var indexAux = ListPr.indexOf(param);
            
                if (indexAux > -1) {
                    ListPr.splice(indexAux, 1);
                }
             }
          }
          $scope.gridOptionsMisProdSel.data=ListPr;
          index =-1;
          
        }
      

        $scope.pedir=function(suc)
        {

          console.info(suc);
          var vend="";
          var Ids=[];
          var detp=[];
          var suma=0;
          var time = Date.now();
        
        
            per=datos["id_user"];
      
           ListPr.forEach(function(p)
           {
            
             total=p['cant']*p['precio'];
            
             suma=suma+total;        
            
          
            detp = {"total":total,"cant":p['cant'],"idp":p['id_producto']}


            
             Ids.push(detp);
             detp =[];
             
       
             })

           $scope.datos=$auth.getPayload();

           ListDetalle = Ids;
  
           $scope.pedido={};
           $scope.pedido.total_pedido=suma;
           $scope.pedido.lista_productos=ListDetalle;
           $scope.pedido.id_user=$scope.datos.id_user;
          
           $scope.pedido.sucursal=suc;
        
         
            console.info("p a enviar",$scope.pedido);
            ServPedido.AltaP(JSON.stringify($scope.pedido)).then(function(resp)
                  {          
                    console.info("q s envio:",resp);
                     
                  }) 
             total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              detp=[];
             suma=0; 
              $state.go("MisPedidos"); 
        }

        
 

         $scope.verpp=function(param, param2)
         {
          if (param2==1) {
           console.info("param",param);
          
           $scope.gridOptionsProd={};
           $scope.veoGrilla=true;
           $scope.gridOptionsMisProdPedidos.paginationPageSizes = [25, 50, 75];
           $scope.gridOptionsMisProdPedidos.paginationPageSize = 25;
           $scope.gridOptionsMisProdPedidos.columnDefs = columnDefsCom2();
        
            ServPedido.TraerTodosD(param['id_pedidos']).then(function(resp2)
            {
              console.info("resp2:",resp2);
              $scope.gridOptionsMisProdPedidos.data=resp2;

            });
          }else{
                console.info("param",param);
          
           $scope.gridOptionsProd={};
           $scope.veoGrilla2=true;
           $scope.gridOptionsMisProdPedidos2.paginationPageSizes = [25, 50, 75];
           $scope.gridOptionsMisProdPedidos2.paginationPageSize = 25;
           $scope.gridOptionsMisProdPedidos2.columnDefs = columnDefsCom2();
        
            ServPedido.TraerTodosD(param['id_pedidos']).then(function(resp2)
            {
              console.info("resp2:",resp2);
              $scope.gridOptionsMisProdPedidos2.data=resp2;

            });
          }
         }

        $scope.Volver=function()
        {
            total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              console.info("LISTA VACIA:",ListPr);
           $state.go("MisPedidos"); 
        }

     function columnDefs () {
      return [
          { field: 'id_pedidos', name: 'id_pedidos', width: 120
          ,enableFiltering: false
          },
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" class="btn btn-default" ng-click="grid.appScope.verpp(row.entity,1)">'}
          ,{ field: 'fecha', name: 'fecha', width: 120 ,enableFiltering: false
          }
          ,{ field: 'sucursal', name: 'sucursal', width: 120 ,enableFiltering: false
          }
          ,{ field: 'nombre', name: 'nombre', width: 120 ,enableFiltering: false
          } 
          ,{ field: 'total_pedido', name: 'total_pedido', width: 120
          ,enableFiltering: false
          }

          ]
        };

        function columnDefsTodos () {
      return [
          { field: 'id_pedidos', name: 'id_pedidos', width: 120
          ,enableFiltering: false
          },
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" class="btn btn-default" ng-click="grid.appScope.verpp(row.entity,2)">'}
          ,{ field: 'fecha', name: 'fecha', width: 120 ,enableFiltering: false
          }
          ,{ field: 'sucursal', name: 'sucursal', width: 120 ,enableFiltering: false
          }
          ,{ field: 'nombre', name: 'nombre', width: 120 ,enableFiltering: false
          } 
          ,{ field: 'tipo', name: 'tipo', width: 120 ,enableFiltering: false
          }
          ,{ field: 'total_pedido', name: 'total_pedido', width: 120
          ,enableFiltering: false
          }

          ]
        };

            function columnDefsCom2 () {
      return [
          { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
          },
           { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
          },
          { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
          },
          { field: 'cant', name: 'cant', width: 120
          ,enableFiltering: false
          }
           ]
        };


    function columnDefsCom () {
      return [
         { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
         },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
         },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
         }, 
         { field: 'agregar', name: 'agregar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="agregar" class="btn btn-default" ng-click="grid.appScope.agregar(row.entity)">'},

      ];
    }



    function columnDefsPsel () {
      return [
         { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
         },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
         },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
         }, 
         { field: 'cant', name: 'cant', width: 120
          ,enableFiltering: false
         },
         { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.EliminarPsel(row.entity)">'},

      ];
    }




})
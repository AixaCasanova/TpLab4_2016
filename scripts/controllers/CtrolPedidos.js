angular
  .module('app')
  .controller('CtrolPedidos', function($scope,$rootScope, data,$auth, $auth,$stateParams,$state, ServPedido, i18nService, uiGridConstants)
   {


         var ListPr = [];
     var total=0;
     var Ids=[];
     $scope.veoGrilla=false;

     $scope.gridOptionsPedidos = {};
     $scope.gridOptionsPedidos.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsPedidos.paginationPageSize = 25;
     $scope.gridOptionsPedidos.columnDefs = columnDefsCom();
    
      $scope.gridOptionsMisPedidos = {};
      $scope.gridOptionsMisPedidos.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsMisPedidos.paginationPageSize = 25;
      $scope.gridOptionsMisPedidos.columnDefs=columnDefs();
      
      
     $scope.gridOptionsMisProdPedidos = {};
     $scope.gridOptionsMisProdPedidos.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdPedidos.paginationPageSize = 25;

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
          
          $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
           $rootScope.SeVe=true;
          $rootScope.userAVer="Bienvenido "+ datos['nombre'];

          if (datos['perfil'] == "administrador") {
          
          console.info("datos.perfil: ",datos['perfil'])

            $rootScope.esAdmin=true;
            $rootScope.esVend=true;
          }else if (datos['perfil'] == "comprador") {
            $rootScope.esAdmin=false;
            $rootScope.esVend=false;
          }else if (datos['perfil'] == "vendedor") {
            $rootScope.esAdmin=false;         
            $rootScope.esVend=true;
          } 
          else if (datos['perfil'] == "encargado") {
            $rootScope.esAdmin=false;         
            $rootScope.esVend=true;
            //modificarr!!!!
          }else{
            
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
          }

          var ObjeJson={};
           var iduser =  datos['id_user'];
           console.info("id_user::",iduser);
           var Info1={};
           var Info2={};
           

            ServPedido.TraerTodos(iduser).then(function(resp)
            {
              console.info("resp1:",resp);
              
              $scope.gridOptionsMisPedidos.data=resp;
               

             });

        }

 //----------------------





    

            // $scope.IrModificarP = function(parametro)
            // {

            //   console.log("que tiene el param??",parametro);
            //   $state.go("ModifP",{parametro:parametro});
            // }
            
            //  $scope.IrEliminarP = function(parametro)
            // {
            //   //console.info(parametro['nombre']);
              
            //   $state.go("EliminarP",{parametro:parametro});
            // }
        


            //      $scope.ModifP=function()
            //       {

            //           ServProducto.ModifP(JSON.stringify($scope.producto)).then(function(resp)
            //             {          
            //               console.info(resp);
            //                 $state.go("productos");

            //             })      
            //       }

            // $scope.EliminarP=function()
            //       {

            //           ServProducto.EliminarP(JSON.stringify($scope.producto)).then(function(resp)
            //             {          
            //               console.info(resp);
            //                 $state.go("productos");

            //             })      
            //       }
           //------------------------  
    var index;
       
        $scope.agregar=function(parametro)
        {
          if(contains(ListPr,parametro)){
            ListPr[index].cant= ListPr[index].cant+1;
            console.info("Lo contienenennene");
          }
          else{
            parametro.cant=1;
            ListPr.push(parametro); 
          }
                   
          $scope.gridOptionsMisProdSel.data=ListPr;
          

        }

        function contains(a, obj) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              index= i;
              return true;
            }
          }
          return false;
        }
       
       $scope.EliminarPsel=function(param)
        {
    
          
          var lst=[];
     
          ListPr.forEach(function(p)
          {

              if (p['id_producto']==param['id_producto']) 
              {
               
                if (band==false) 
                {
                  console.info(band);
                  console.info("entro se excluye:",p['id_producto']);
                  console.info("param reciv:",param['id_producto']);
                  var band=true;
                }else{
                  console.info(band);
                  console.info("entro se incluye:",p['id_producto']);
                  console.info("param reciv:",param['id_producto']);
                  lst.push(p);  
                } 
              }else
              {     
                if (band==false) 
                {
                  console.info(band);
                  console.info("entro se incluye:",p['id_producto']);
                  console.info("param reciv:",param['id_producto']);
                  lst.push(p);
                }
              }
          })
          
          ListPr=lst;
          
           $scope.gridOptionsMisProdSel.data=ListPr;
          
        }
      

        $scope.pedir=function()
        {

          //gridOptionsPedidos

          console.info("LISTA LLENA:",ListPr);
           ListPr.forEach(function(p)
           {
             total=total+ p['precio'];
             Ids.push(p['id_producto']);
             console.info("P:",p);
             $state.go("MisPedidos");
       
             })

           $scope.datos=$auth.getPayload();

           $scope.pedido={};
           $scope.pedido.total_pedido=total;
           $scope.pedido.lista_productos=Ids;
           $scope.pedido.id_user=$scope.datos.id_user;
           console.info("ped:",$scope.pedido);
            ServPedido.AltaP(JSON.stringify($scope.pedido)).then(function(resp)
                  {          
                    console.info(resp);
                     
                  }) 
             total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              console.info("LISTA VACIA:",ListPr);
              $state.go("MisPedidos"); 
        }

        
 

         $scope.verpp=function(param)
         {

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
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" ng-click="grid.appScope.verpp(row.entity)">'}
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
         { field: 'agregar', name: 'agregar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="agregar" ng-click="grid.appScope.agregar(row.entity)">'},

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
         { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" ng-click="grid.appScope.EliminarPsel(row.entity)">'},

      ];
    }




})

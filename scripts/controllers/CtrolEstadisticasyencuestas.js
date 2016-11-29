angular
  .module('app')
  .controller('CtrolEstadisticas', function($scope,$rootScope ,$auth,$state ,data, ServPedido ,$stateParams, i18nService, uiGridConstants) {
 


  $scope.gridOptionsE1 = {};
  $scope.gridOptionsE1.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE1.paginationPageSize = 25;
  $scope.gridOptionsE1.columnDefs=CDcantPedPorSucursal();
 
   $scope.gridOptionsE2 = {};
  $scope.gridOptionsE2.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE2.paginationPageSize = 25;
  $scope.gridOptionsE2.columnDefs=CDcantPedPorSucursalYEmp();

    $scope.gridOptionsE3 = {};
  $scope.gridOptionsE3.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE3.paginationPageSize = 25;
  $scope.gridOptionsE3.columnDefs=CDcantPedPorSucursal();


  $scope.gridOptionsE4 = {};
  $scope.gridOptionsE4.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE4.paginationPageSize = 25;
  $scope.gridOptionsE4.columnDefs=CDcantPedPorSucursal();

    $scope.gridOptionsE5 = {};
  $scope.gridOptionsE5.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE5.paginationPageSize = 25;
  $scope.gridOptionsE5.columnDefs=CDcantPedPorSucursal();

    $scope.gridOptionsE6 = {};
  $scope.gridOptionsE6.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE6.paginationPageSize = 25;
  $scope.gridOptionsE6.columnDefs=CDcantPedPorSucursal();

    $scope.gridOptionsE7 = {};
  $scope.gridOptionsE7.paginationPageSizes = [25, 50, 75];
  $scope.gridOptionsE7.paginationPageSize = 25;
  $scope.gridOptionsE7.columnDefs=CDcantPedPorSucursal();




 	

 
$scope.ver1=false;
$scope.ver2=false;
$scope.ver3=false;
$scope.ver4=false;
$scope.ver5=false;
$scope.ver6=false;
$scope.ver7=false;
 


$scope.verE1= function()
{
	$scope.ver1=true;
	$scope.ver2=false;
	$scope.ver3=false;
	$scope.ver4=false;
	$scope.ver5=false;
	$scope.ver6=false;
	$scope.ver7=false;

 
 	 ServPedido.Estadisticas("1").then(function(resp)
    {
        console.info(resp);
     	$scope.gridOptionsE1.data=resp
	}); 
}
$scope.verE2= function()
{
	$scope.ver1=false;
	$scope.ver2=true;
	$scope.ver3=false;
	$scope.ver4=false;
	$scope.ver5=false;
	$scope.ver6=false;
	$scope.ver7=false;
 

	ServPedido.Estadisticas("2").then(function(resp)
    {
        console.info(resp);
     	$scope.gridOptionsE2.data=resp
	}); 
}
$scope.verE3= function()
{
	$scope.ver1=false;
	$scope.ver2=false;
	$scope.ver3=true;
	$scope.ver4=false;
	$scope.ver5=false;
	$scope.ver6=false;
	$scope.ver7=false;
}
$scope.verE4= function()
{
	$scope.ver1=false;
	$scope.ver2=false;
	$scope.ver3=false;
	$scope.ver4=true;
	$scope.ver5=false;
	$scope.ver6=false;
	$scope.ver7=false;
}
$scope.verE5= function()
{
	$scope.ver1=false;
	$scope.ver2=false;
	$scope.ver3=false;
	$scope.ver4=false;
	$scope.ver5=true;
	$scope.ver6=false;
	$scope.ver7=false;
}
$scope.verE6= function()
{
	$scope.ver1=false;
	$scope.ver2=false;
	$scope.ver3=false;
	$scope.ver4=false;
	$scope.ver5=false;
	$scope.ver6=true;
	$scope.ver7=false;
}
$scope.verE7= function()
{
	$scope.ver1=false;
	$scope.ver2=false;
	$scope.ver3=false;
	$scope.ver4=false;
	$scope.ver5=false;
	$scope.ver6=false;
	$scope.ver7=true;
}


 function CDcantPedPorSucursal () {
      return [
         { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
         { field: 'cantidad', name: 'cantidad', width: 120
          ,enableFiltering: false
        }          

      ];
    };
 function CDcantPedPorSucursalYEmp () {
      return [
         { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
         { field: 'cantidad', name: 'cantidad', width: 120
          ,enableFiltering: false
        },
         { field: 'empleado', name: 'empleado', width: 120
          ,enableFiltering: false
        }         

      ];
    };

/*
		            var lbl="labels:[\"";
                  var lbl2="data:[\"";
                 var cont=1;
  
            resp.forEach(function(obj){
            	 
            
            	if (resp['length']==cont) 
            	{
            		lbl=lbl+obj['sucursal']+"\"";
            		lbl2=lbl2+obj['cantidad']+"\"";
            	}
            		else{lbl=lbl+obj['sucursal']+"\",";
            			lbl2=lbl2+obj['cantidad']+"\",";
            	}
            	cont=cont+1;
            })
            lbl+="]";
            console.info(lbl);
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["c","d"],   // ["Octavio", "Pepe", "LucasEma", "Maria", "Jose"],
		        datasets: [{
		        label: 'Pedidos',
		        data: [3,4], //[1, 2, 3, 5, 2],
		            width:50,
		            height:50,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.9)',
		                'rgba(54, 162, 235, 0.9)' ,
		               'rgba(255, 206, 86, 0.9)',
		                'rgba(75, 192, 192, 0.9)',
		                'rgba(153, 102, 255, 0.9)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)' ,
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

		var ctx = document.getElementById("myChart");
		var ctx = document.getElementById("myChart").getContext("2d");
		var ctx = $("#myChart");
		var ctx = "myChart";
*/

})


 .controller('CtrolEncuesta', function($scope,$rootScope ,$auth,$state ,data, ServPedido ,$stateParams, i18nService, uiGridConstants) {
 

	 $scope.descripcionClaraNew="Si";
	 $scope.problemasPRealizarPNew="Si";
	 $scope.PregAdquirioOld="Si";
 	$scope.tiempoEntregaOld="Bueno";
	 $scope.calidadProductoOld="Bueno";
	 $scope.calidadAtencionOld="Bueno";
	 $scope.ComoLlego="TV";


 $scope.guardarEncuesta=function()
 {
 	$scope.encuesta={};
	$scope.encuesta.descripcionClaraNew=$scope.descripcionClaraNew;
	$scope.encuesta.problemasPRealizarPNew=$scope.problemasPRealizarPNew;
	$scope.encuesta.PregAdquirioOld=$scope.PregAdquirioOld;
	$scope.encuesta.tiempoEntregaOld=$scope.tiempoEntregaOld;
	$scope.encuesta.calidadProductoOld=$scope.calidadProductoOld;
	$scope.encuesta.calidadAtencionOld=$scope.calidadAtencionOld;
	$scope.encuesta.ComoLlego=$scope.ComoLlego;

	
	console.info($scope.encuesta);
	ServPedido.GuardarEncuesta(JSON.stringify($scope.encuesta)).then(function(resp)
    {
        console.info(resp);
     	 
	}); 

 	//$state.go("MisPedidos");
 }

})



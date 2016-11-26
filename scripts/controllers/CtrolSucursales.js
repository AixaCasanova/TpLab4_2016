angular
  .module('app')
  .controller('CtrolSucursales', function($scope,$rootScope, $auth,  data, $auth,$stateParams,$state, ServSucursales, i18nService, uiGridConstants)
   {



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

  		
   
       }) ;


})

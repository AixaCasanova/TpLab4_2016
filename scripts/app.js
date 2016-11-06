angular
  .module('app', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('usuarios');
    $stateProvider

    .state('usuarios', {
      url: '/usuarios',
      templateUrl: 'views/usuarios.html',
      controller:'CtrolUsuario'
    })
    
    .state('ofertas', {
      url: '/ofertas',
      templateUrl: 'views/ofertas.html',
      controller:'CtrolOfertas'
    })  
    .state('productos', {
      url: '/productos',
      templateUrl: 'views/productos.html',
      controller:'CtrolProductos'
    })
  });




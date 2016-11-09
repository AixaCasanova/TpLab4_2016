angular
  .module('app', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap',
    'satellizer'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    $authProvider.loginUrl = "TpLab4_2016/jwt/php/auth.php";
    $authProvider.tokenName = "MitokenGeneradoEnPhp";
    $authProvider.tokenPrefix = "Aplicacion";
    $authProvider.authHeader="data";

    $urlRouterProvider.otherwise('inicio');
    $stateProvider
    .state('inicio', {
      url: '/inicio',
      templateUrl: 'views/inicio.html'
    })
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
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller:'CtrolLogin'
    })
     .state('empleados', {
      url: '/empleados',
      templateUrl: 'views/empleados.html',
      controller:'CtrolEmpleados'
    })
    .state('clientes', {
      url: '/clientes',
      templateUrl: 'views/clientes.html',
      controller:'CtrolClientes'
    })
  });




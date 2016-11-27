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
    'satellizer',
    'angularFileUpload'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    $authProvider.loginUrl = "TpLab4_2016/jwt/php/auth.php";
    $authProvider.tokenName = "MitokenGeneradoEnPhp";
    $authProvider.tokenPrefix = "Aplicacion";
    $authProvider.authHeader="data";

    $urlRouterProvider.otherwise('Principal');
    $stateProvider
    .state('inicio', {
      url: '/inicio',
      templateUrl: 'index.html'
    })
    .state('usuarios', {
      url: '/usuarios',
      templateUrl: 'views/Usuarios/usuarios.html',
      controller:'CtrolUsuario'
    })
    .state('productos', {
      url: '/productos',
      templateUrl: 'views/productos/productos.html',
      controller:'CtrolProductos'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'CtrolLogin'
    })
     .state('empleados', {
      url: '/empleados',
      templateUrl: 'views/empleado/empleados.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })
    .state('clientes', {
      url: '/clientes',
      templateUrl: 'views/clientes/clientes.html',
      controller:'CtrolClientes'
    })
    .state('AltaCliente', {
      url: '/AltaCliente',
      templateUrl: 'views/clientes/AltaClienteS.html',
      controller:'CtrolClientes'
    })
    .state('ModifCli', {
      url: '/ModifCli',
      templateUrl: 'views/clientes/ModifClientes.html',
      controller:'CtrolClientes',
      params:{'parametro':'parametro'} 
    })
    .state('EliminarCli', {
      url: '/EliminarCli',
      templateUrl: 'views/clientes/EliminarClientes.html',
      controller:'CtrolClientes',
      params:{'parametro':'parametro'} 
    })
    .state('AltaEmpleado', {
      url: '/AltaEmpleado',
      templateUrl: 'views/empleado/AltaEmpleado.html',
      controller:'CtrolEmpleados' 
    })
      .state('ModifEmp', {
      url: '/ModifEmp',
      templateUrl: 'views/empleado/ModifEmp.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })
    .state('EliminarEmp', {
      url: '/EliminarEmp',
      templateUrl: 'views/empleado/EliminarEmp.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })   
     .state('AltaProd', {
      url: '/AltaProd',
      templateUrl: 'views/productos/AltaProd.html',
      controller:'CtrolProductos'
    })   
      .state('ModifP', {
      url: '/ModifP',
      templateUrl: 'views/productos/ModifP.html',
      controller:'CtrolProductos',
      params:{'parametro':'parametro'} 
    })
      .state('EliminarP', {
      url: '/EliminarP',
      templateUrl: 'views/productos/EliminarP.html',
      controller:'CtrolProductos',
      params:{'parametro':'parametro'} 
    })
      .state('ModifUs', {
      url: '/ModifUs',
      templateUrl: 'views/Usuarios/ModifUs.html',
      controller:'CtrolUsuario',
      params:{'parametro':'parametro'} 
    })
     .state('EliminarUs', {
      url: '/EliminarUs',
      templateUrl: 'views/Usuarios/EliminarUs.html',
      controller:'CtrolUsuario',
      params:{'parametro':'parametro'} 
    })
    .state('AltaUs', {
      url: '/AltaUs',
      templateUrl: 'views/Usuarios/AltaUs.html',
      controller:'CtrolUsuario'
    })   
    .state('encargados', {
      url: '/encargados',
      templateUrl: 'views/encargados/encargados.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
     .state('AltaEncargado', {
      url: '/AltaEncargado',
      templateUrl: 'views/encargados/AltaEncargado.html',
      controller:'CtrolEncargados' 
    })
      .state('EliminarEnc', {
      url: '/EliminarEnc',
      templateUrl: 'views/encargados/EliminarEnc.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
      .state('ModificarEnc', {
      url: '/ModificarEnc',
      templateUrl: 'views/encargados/ModificarEnc.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
     .state('ofertas', {
      url: '/ofertas',
      templateUrl: 'views/ofertas/ofertas.html',
      controller:'CtrolOfertas'
    })  
     .state('Registrarse', {
      url: '/Registrarse',
      templateUrl: 'views/clientes/Registrarse.html',
      controller:'CtrolClientes'
    })
    .state('pedidos', {
      url: '/pedidos',
      templateUrl: 'views/pedidos/pedidos.html',
      controller:'CtrolPedidos'
    })
    .state('MisPedidos', {
      url: '/MisPedidos',
      templateUrl: 'views/pedidos/MisPedidos.html',
      controller:'CtrolPedidos'
    })
    .state('Principal', {
      url: '/Principal',
      templateUrl: 'views/principal.html',
      controller:'CtrolSucursales'
    })
     .state('AltaOferta', {
      url: '/AltaOferta',
      templateUrl: 'views/ofertas/AltaOferta.html',
      controller:'CtrolOfertas'
    })
    .state('ModifOf', {
      url: '/ModifOf',
      templateUrl: 'views/ofertas/ModifOferta.html',
      controller:'CtrolOfertas',
       params:{'parametro':'parametro'} 
    })
        .state('EliminarOf', {
      url: '/EliminarOf',
      templateUrl: 'views/ofertas/EliminarOferta.html',
      controller:'CtrolOfertas',
       params:{'parametro':'parametro'} 
    })
    .state('sucursales', {
      url: '/sucursales',
      templateUrl: 'views/sucursales/sucursales.html',
      controller:'CtrolSucursales'
    })
    .state('ModifSuc', {
      url: '/ModifSuc',
      templateUrl: 'views/sucursales/ModifSuc.html',
      controller:'CtrolSucursales',
       params:{'parametro':'parametro'} 
    })      
    .state('AltaSuc', {
      url: '/AltaSuc',
      templateUrl: 'views/sucursales/AltaSuc.html',
      controller:'CtrolSucursales' 
    })   
    .state('estadisticas', {
      url: '/estadisticas',
      templateUrl: 'views/Estadisticas.html',
      controller:'CtrolEstadisticas' 
    }) 

  });




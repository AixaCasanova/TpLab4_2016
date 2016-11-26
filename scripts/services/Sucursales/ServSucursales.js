angular
  .module('app')
  .factory('ServSucursales', function (ServSucursalesBase) {
   
    var objeto = {};
    objeto.nombre = "";
    objeto.TraerTodos = TraerTodos;
    /*objeto.ModifP=ModifP;
    objeto.AltaP = AltaP;
    objeto.EliminarP=EliminarP;*/
    
   
    return objeto;

    
    

    function TraerTodos(){
   
      return ServSucursalesBase.TraerTodos();
 
    };

/*

    function AltaP(p)
    {
      return ServProductoBase.AltaP(p);
    };


    function ModifP(p)
    {
      return ServProductoBase.ModifP(p);
    };

 
 

    function EliminarP(p)
    {
      return ServProductoBase.EliminarP(p);
    };
*/
  })//Cierra factory

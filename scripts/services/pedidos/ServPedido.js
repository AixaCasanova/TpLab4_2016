angular
  .module('app')
  .factory('ServPedido', function (ServPedidoBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerTodos = TraerTodos;
    objeto.ModifP=ModifP;
    objeto.AltaP = AltaP;
    objeto.TraerListaSuc=TraerListaSuc;
    objeto.EliminarP=EliminarP;
    objeto.TraerP=TraerP;
    objeto.TraerTodosD=TraerTodosD;
   
    return objeto;

    
     function TraerListaSuc(){
       return ServPedidoBase.TraerListaSuc();

    };

    function TraerTodos(id){
   
      return ServPedidoBase.TraerTodos(id);

    };
    function TraerTodosD(id){
   
      return ServPedidoBase.TraerTodosD(id);

    };
    

    function TraerP(){
   
      return ServPedidoBase.TraerP();

    };


    function AltaP(p)
    {
      return ServPedidoBase.AltaP(p);
    };


    function ModifP(p)
    {
      return ServPedidoBase.ModifP(p);
    };

 
 

    function EliminarP(p)
    {
      return ServPedidoBase.EliminarP(p);
    };

  })//Cierra factory

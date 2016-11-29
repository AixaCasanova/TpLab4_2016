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
    objeto.Estadisticas=Estadisticas;
    objeto.GuardarEncuesta=GuardarEncuesta;
   
    return objeto;

    
     function TraerListaSuc(){
       return ServPedidoBase.TraerListaSuc();

    };
    
     function Estadisticas(num){
       return ServPedidoBase.Estadisticas(num);

    };

    
    function GuardarEncuesta(Obj){
      console.info(Obj);
       return ServPedidoBase.GuardarEncuesta(Obj);

    };

    function TraerTodos(id){
   
      console.info(id);
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

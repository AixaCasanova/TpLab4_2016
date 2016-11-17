angular
  .module('app')
  .service('ServPedidoBase', function ($http,factorybddPedido) {
 
 
     var qhago =""; 
    var urlM = factorybddPedido.Api2;
    var urlE = factorybddPedido.Api3;
    var urlA = factorybddPedido.Api4;
    var urlProd=factorybddPedido.Api5;
    var url = factorybddPedido.Api;
    var urlTD = factorybddPedido.Api6;
    

    //Esta funcion es privada
   

      function TraerUrl(parametro,accion)
      {
 
        if (!parametro)
        {
           
      
          return url;
        }
        else{
   
           if (accion=="modif")
           {
 
             return urlM + "/" + parametro;
        
           } 
           else if (accion=="todos") {
                 return url + "/" + parametro;
            }
            else if (accion=="todosD") {
                 return urlTD + "/" + parametro;
            }
            else if (accion=="elim") {
                 return urlE + "/" + parametro;
            }
           else if (accion=="alta") {
                return urlA + "/" + parametro;
           }
           else if (accion=="prod") {
                return urlProd;
           }
           else{
              return url + "/" + parametro;;
            }
        }

      } 

         this.AltaP =function(p){
            
            qhago="alta";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }

      

         this.ModifP =function(p){
            
            qhago="modif";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }


  
           this.EliminarP =function(p){
            
            qhago="elim";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }
     
       this.TraerTodos =function(id){
        qhago="todos";
        return $http.get(TraerUrl(id,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
      
       this.TraerTodosD =function(id){
        qhago="todosD";
        return $http.get(TraerUrl(id,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

        this.TraerP =function(){
          qhago="prod";
        return $http.get(TraerUrl("na",qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
      



  })//Cierra Servicio
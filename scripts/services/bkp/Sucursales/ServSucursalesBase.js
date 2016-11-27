angular
  .module('app')
  .service('ServSucursalesBase', function ($http,factorybddSucursales) {
 
 
/*     var qhago =""; 
    var urlM = factorybddSucursales.Api2;
    var urlE = factorybddSucursales.Api3;
    var urlA = factorybddSucursales.Api4;*/
    
    var url = factorybddSucursales.Api;
    var urlloc = factorybddSucursales.Api2;
    var urlofr  = factorybddSucursales.Api3;
    //Esta funcion es privada
   

      function TraerUrl(parametro,accion)//,accion
      {
 
        if (!parametro)
        {
           
      
          return url;
        }
        else{
     
           if (accion=="loc")
           {
            

             return urlloc + "/" + parametro;
        
           }
            else if (accion=="ofr") {
              console.info( urlofr + "/" + parametro);
                 return urlofr + "/" + parametro;
            }
             /*  else if (accion=="elim") {
                 return urlE + "/" + parametro;
            }
           else if (accion=="alta") {
                return urlA + "/" + parametro;
           }
           else{
              return url + "/" + parametro;
            }
        }
            */
              return url + "/" + parametro;//condicional
      } 
    }

     this.TraerTodos =function(){
        return $http.get(TraerUrl()).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

      
       this.InsertarLocal =function(loc){
 
         qhago="loc";
        return $http.get(TraerUrl(loc,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
       this.TraerMisOfertas =function(parametro){
 
         qhago="ofr";
        return $http.get(TraerUrl(parametro,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

/*
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
     
      


*/
  })//Cierra Servicio

<?php
require_once"accesoDatos.php";
class pedidos
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_pedidos;
 
 	public $total_pedido;

 	public $id_user;
  
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function Getid_pedidos()
	{
		return $this->id_pedidos;
	}
 
	public function Gettotal_pedido()
	{
		return $this->total_pedido;
	}

	public function Getid_user()
	{
		return $this->id_user;
	}

	public function Setid_user($valor)
	{
		$this->id_user = $valor;
	}
 

	public function Setid_pedidos($valor)
	{
		$this->id_pedidos = $valor;
	}
 
	public function Settotal_pedido($valor)
	{
		$this->total_pedido = $valor;
	}
	
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct()
	{
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnaPedidos($Parametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from pedidos where id_pedidos =:id_pedidos");
		$consulta->bindValue(':id_pedidos', $Parametro, PDO::PARAM_INT);
		$consulta->execute();
		$VotoBuscado= $consulta->fetchObject('pedidos');
		return $VotoBuscado;	
					
	}

	public static function TraerMisPedidos($id) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select id_pedidos,total_pedido, id_user from pedidos where id_user =:id_user");
		$consulta->bindValue(':id_user', $id, PDO::PARAM_INT);
		$consulta->execute();			
		$arrp= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrp;
					
	}
	public static function TraerProdDeMisPedidos($id_p) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select p.descripcion ,p.precio, p.id_producto from det_ped as dp, productos as p where id_pedidos =:id_p and dp.id_producto = p.id_producto");
		$consulta->bindValue(':id_p', $id_p, PDO::PARAM_INT);
		$consulta->execute();			
		$arrp= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrp;
					
	}
	
	public static function TraerUltimoId() 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select id_pedidos FROM pedidos ORDER by id_pedidos DESC LIMIT 1");
		$consulta->execute();
		$VotoBuscado= $consulta->fetchObject('pedidos');
		return $VotoBuscado;	
		
					
	}
	public static function TraerTodosLosPedidos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from pedidos");
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrVotos;
	}
	
	public static function BorrarPedidos($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from pedidos WHERE id_pedidos=:id_pedidos");	
		$consulta->bindValue(':id_pedidos',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	public static function ModificarPedidos($pedidos)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update pedidos 
				total_pedido=:total_pedido,
				id_user=:id_user	
				WHERE id_pedidos=:id_pedidos");

			$consulta->bindValue(':id_pedidos',$pedidos->id_pedidos, PDO::PARAM_INT);
			$consulta->bindValue(':total_pedido', $pedidos->total_pedido, PDO::PARAM_STR);
			$consulta->bindValue(':lista_productos', $pedidos->lista_productos, PDO::PARAM_STR);
			$consulta->bindValue(':id_user', $pedidos->id_user, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

public static function InsertarDetPed($id_pr, $id_ped)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into det_ped (id_pedidos,id_producto)values(:id_pedidos,:id_producto)");
		$consulta->bindValue(':id_producto', $id_pr, PDO::PARAM_STR);
		$consulta->bindValue(':id_pedidos', $id_ped, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}	
	public static function InsertarPedidos($pedidos)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pedidos (id_pedidos,total_pedido,id_user)values(:id_pedidos,:total_pedido,:id_user)");
		$consulta->bindValue(':total_pedido', $pedidos->total_pedido, PDO::PARAM_STR);
		$consulta->bindValue(':id_pedidos', $pedidos->id_pedidos, PDO::PARAM_STR);
		$consulta->bindValue(':id_user', $pedidos->id_user, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}	
//--------------------------------------------------------------------------------//


}

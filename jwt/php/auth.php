<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$datosDelModeloPorPost= file_get_contents("PHP://input");
$user=json_decode($datosDelModeloPorPost);


	
	$claveDeEncripcion="estaEsLaClave";
	$token["usuario"]=$user->mail;
	$token["perfil"]=$user->tipo;
	$token["iat"]=time();
	$token["exp"]=time()+1000;
	$token["algo"]=$user;
 


	$jwt = JWT::encode($token, $claveDeEncripcion);
	$array["MitokenGeneradoEnPhp"]=$jwt;

	echo json_encode($array);

?>
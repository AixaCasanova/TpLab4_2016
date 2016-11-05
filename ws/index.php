<?php
include("../clases/usuario.php");
 
require 'vendor/autoload.php';

 
$app = new Slim\App();

 


$app->get('/usuarios[/]', function ($request, $response, $args) {
    //$response->write("Lista de usuarios");
    $dato=usuario::TraerTodosLosusuarios();
    $response->write(json_encode($dato));

    return $response;
});
/*

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

$app->post('/alta/{objeto}', function ($request, $response, $args) {
    
    $pers=json_decode($args['objeto']);
    $dato=Persona::InsertarPersona($pers);
    //$response->write(json_encode($dato));
    $response->write($args);
    return $response;
});


$app->get('/usuario[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos usuario ");
    var_dump($args);
    return $response;
});
 
$app->post('/usuario/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    var_dump($args);
    return $response;
});

 
$app->put('/usuario/{id}', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    var_dump($args);
    return $response;
});

 
$app->delete('/usuario/{id}', function ($request, $response, $args) {
    $response->write("borrar !", $args->id);
    var_dump($args);
    return $response;
});
 

 */
$app->run();

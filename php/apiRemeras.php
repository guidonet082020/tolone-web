<?php

include_once 'pedido.php';

class ApiRemeras{
    
    function getAll(){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();

        $res = $pedido->getPedidos();

        while($row = mysqli_fetch_array($res)){
             $item = array(
                'id' => $row['id'],
                'name' => $row['name'],
                'email' => $row['email'],
                'phone' => $row['phone'],
                'object' => json_decode(stripslashes($row['object'])),
                );
             array_push($pedidos['items'], $item);
        }

        echo json_encode($pedidos);
    }
}


?>
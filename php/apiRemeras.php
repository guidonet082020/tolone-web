<?php

include_once 'pedido.php';

class ApiRemeras{
    function getAll(){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();

        $res = $pedido->getPedidos();

        if($res->rowCount()){
            while($row = $res->fetch(PDO::FETCH_ASSOC)){
                $item = array(
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'email' => $row['email'],
                    'phone' => $row['phone'],
                    'object' => $row['object'],
                );
                array_push($pedidos['items'], $item);
            }
            echo json_encode($pedido);
        }else{
            echo json_encode(array('message' => 'No hay elementos en la Base'))
        }
    }
}


?>
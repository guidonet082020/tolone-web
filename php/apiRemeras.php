<?php

include_once 'pedido.php';

class ApiRemeras{
<<<<<<< HEAD
=======
    
>>>>>>> 5fb1c7fce194b8c91ef0549588e46e5b70a06d54
    function getAll(){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();

        $res = $pedido->getPedidos();

<<<<<<< HEAD
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
=======
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
>>>>>>> 5fb1c7fce194b8c91ef0549588e46e5b70a06d54
    }
}


?>
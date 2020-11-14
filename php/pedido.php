<?php

include_once 'database.php';

class Pedido extends DB{

    function getPedidos(){
        $query = $this->connect()->query('SELECT * FROM pedidos');
        return $query;
    }
}


?>
<?php

include_once 'database.php';

class Pedido extends DB{

    function getPedidos(){
        $query = $this->connect()->query('SELECT * FROM pedidos');
        return $query;
    }

    function getPedido($id){
        $query = $this->connect()->query('SELECT * FROM pedidos WHERE id ='. $id);
        return $query;
    }

    function confirm_cancel_pedido($id, $date, $c_c){ 
        // $c_c == Confirm or cancel action in type string
        if($c_c == 'CANCELADO'){
            $query = $this->connect()->query('UPDATE pedidos SET pedido_cancelado = "'. $c_c .'", pedido_confirmado = "false" WHERE id ='. $id);
            echo "Su pedido fue cancelado";
        }elseif($c_c == 'CONFIRMADO'){
            $query = $this->connect()->query('UPDATE pedidos SET pedido_confirmado = "'. $c_c .'", pedido_cancelado = "false" WHERE id ='. $id);
            echo "Su pedido fue confirmado";
        }
    }
}

// START OBJECT MASTER PEDIDO
$master_pedido = new Pedido();

    if(isset($_POST['id'])){
        $id_remera = $_POST['id'];
        $fecha = $_POST['date'];
        $confirm_cancel = $_POST['message'];
        $master_pedido->confirm_cancel_pedido($id_remera, $fecha, $confirm_cancel);
    }

    if(isset($_GET['id'])){
        $id_remera = $_GET['id'];
        $res = $master_pedido->getPedido($id_remera);
        $pedido = array();
        $pedido["item"] = array();
        while ($row = $res->fetch_assoc()) {
            $item = array(
                'id' => $row['id'],
                'name' => $row['name'],
                'email' => $row['email'],
                'phone' => $row['phone'],
                'object' => json_decode(stripslashes($row['object'])),
                'pedido_confirmado' => $row['pedido_confirmado'],
                'pedido_cancelado' => $row['pedido_cancelado'],
                'fecha' => $row['fecha'],
                );
            array_push($pedido['item'], $item);
        }
        echo json_encode($pedido['item']);
    }
// END OBJECT MASTER PEDIDO
?>

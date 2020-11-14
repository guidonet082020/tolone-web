<?php
    include('database.php');
    // if(isset($_POST['name'])){
    //     $name = $_POST['name'];
    //     $email = $_POST['email'];
    //     $phone = $_POST['phone'];
    //     $post_obj = $_POST['post_obj'];
        
    //     $model = $_POST['model'];
    //     $color_base = $_POST['color_base'];
    //     $color_trama = $_POST['color_trama'];
    //     $color_trama_two = $_POST['color_trama_two'];
    //     $number = $_POST['number'];
    //     $number_color = $_POST['number_color'];
        
    //     $query = "INSERT into pedidos(name,phone,email,object) VALUES ('$name','$phone','$email','$post_obj')";
    //     $result = mysqli_query($connection, $query);
        
    //     if(!$result){
    //         die('Error en la consulta '. mysqli_error($connection));
    //     }

    //      $email_to = "pedidos@tolone.com.ar";
    //      $content = "Nombre: " . $name . "\nEmail: " . $email . "\nTelefono: " . $phone ."\nPedido: \n Modelo seleccionado: ". $model ."\nColor Base: ". $color_base ."\nColor Trama: ". $color_trama ."\nColor Trama Dos: ". $color_trama_two ."\nModelo Numero: ". $number ."\nColor Numero: ". $number_color;
         
    //      mail($email_to,"Nueva solicitud de camiseta", $content);
        
    //     echo 200;
    // }
    class AddCreation extends DB{
        function insertCreation($name, $phone, $email, $post_obj){
            $query = $this->connect()->query("INSERT into pedidos(name,phone,email,object) VALUES ('$name','$phone','$email','$post_obj')");
            return 200;
        }
    }

    $master_addCreation = new AddCreation();
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $post_obj = $_POST['post_obj'];
        
        $model = $_POST['model'];
        $color_base = $_POST['color_base'];
        $color_trama = $_POST['color_trama'];
        $color_trama_two = $_POST['color_trama_two'];
        $number = $_POST['number'];
        $number_color = $_POST['number_color'];
        
        $master_addCreation->insertCreation($name, $phone, $email, $post_obj);
    }

?>
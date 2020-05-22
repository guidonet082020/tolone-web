<?php
    include('database.php');
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $bugSelect = $_POST['bugSelect'];
        $placeSelect = $_POST['placeSelect'];
        
        $query = "INSERT into consulta(name,bug,place,phone,email,message) VALUES ('$name','$bugSelect','$placeSelect','$phone','$email','$message')";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Error en la consulta '. mysqli_error($connection));
        }

         $email_to = "";
         $content = "Nombre: " . $name . "\nEmail: " . $email . "\nTelefono: " . $phone ."\nServicio Seleccionado: ". $bugSelect ."\nLugar donde se solicita: " . $placeSelect . "\nMensaje: " . $message;
         mail($email_to,"", $content);
        
        echo 200;
    }

?>
<?php
    include('database.php');
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        $query = "INSERT into consulta(name,phone,email,message) VALUES ('$name','$phone','$email','$message')";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Error en la consulta '. mysqli_error($connection));
        }

         $email_to = "contacto@tolone.com.ar";
         $content = "Nombre: " . $name . "\nEmail: " . $email . "\nTelefono: " . $phone ."\nMensaje: " . $message;
         mail($email_to,"Nueva consulta de contacto", $content);
        
        echo 200;
    }

?>
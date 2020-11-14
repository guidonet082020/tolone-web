<?php
    //$connection = mysqli_connect('192.168.0.61','ad_tolone-web','a2PEit6hg7G7','tolone-web-db');

    class DB{
        private $host;
        private $db;
        private $user;
        private $password;
        private $charset;

        public function __construct(){
            //$this->host = '192.168.0.61';
            //$this->db = 'tolone-web-db';
            //$this->user = 'ad_tolone-web';
            //$this->password = 'a2PEit6hg7G7';
            //$this->charset = 'utf8mb4';
        }

        function connect(){
            try{
                $connection = "mysql:host=".$this->host.";dbname=" . $this->db . ";charset=" . $this->charset;
                $options = [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ];
                //$pdo = new PDO($connection, $this->user, $this->password, $options);
                $pdo = new PDO($connection,$this->user,$this->password);
            
                return $pdo;
    
            }catch(PDOException $e){
                print_r('Error connection: ' . $e->getMessage());
            }   
        }
    }
    
?>
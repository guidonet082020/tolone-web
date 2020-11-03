<?php
    //$connection = mysqli_connect('192.168.0.61','ad_tolone-web','a2PEit6hg7G7','tolone-web-db;

    class DB{

        private $host;
        private $db;
        private $user;
        private $password;
        private $charset;

        public function __construct(){
            $this->host = '192.168.0.61';
            $this->db = 'tolone-web-db';
            $this->user = 'ad_tolone-web';
            $this->password = 'a2PEit6hg7G7';
            $this->charset = 'utf8mb4';
        }

        function connect(){

            $conn = new mysqli($this->host, $this->user, $this->password, $this->db);

            // Check connection
            if (!$conn) {
                die("Connection failed: " . $conn->connect_error());
            }

            //echo "Connected successfully";
            //$conn->close();

            return $conn;
        }

    }
    
?>
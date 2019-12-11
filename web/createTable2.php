<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hwdata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE hwtable2 (
city VARCHAR(20) PRIMARY KEY NOT NULL,
country VARCHAR(20) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table hwtable2 created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
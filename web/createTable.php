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
$sql = "CREATE TABLE hwtable (
email VARCHAR(30) NOT NULL,
name VARCHAR(30) PRIMARY KEY NOT NULL,
age INT(3) NOT NULL,
city VARCHAR(20) NOT NULL,
type VARCHAR(20) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table hwtable created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
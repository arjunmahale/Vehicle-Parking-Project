<?php
// Database connection details
$host = "localhost";
$dbname = "empdb";
$user = "postgres";
$password = "omkar";

// Connect to the database
$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

// Check connection
if (!$conn) {
    die("Connection failed: " . pg_connect_error());
}

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// Insert data into users table
$sql = "insert into users values('$username','$password')";

// Execute query
if (pg_query($conn, $sql)) {
    header("Location: ParkingForm.html");
    // echo "Successfull";
} else {
    echo "Error: " . $sql . "<br>" . pg_last_error($conn);
}

// Close connection
pg_close($conn);
?>
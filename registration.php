<?php
   
   $conn=mysqli_connect('localhost','root','','vehicle') or die('Connection failed');
    if(!$con)
    {
       echo"Connection Failed";
    }
   $name=$_POST['name'];
   $email=$_POST['email'];
   $password=$_POST['password'];

   $sql="INSERT INTO `test1`(`name`, `email`, `password`) 
   VALUES ('$name','$email','$password')";

   $result=mysqli_query($con , $sql);

   if($result)
   {
        echo"Data Submitted";
   }
   else
   {
    echo"Query failed....!";
   }

?>
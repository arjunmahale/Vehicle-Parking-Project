<?php
include 'registration.php';

if(isset($_POST['button'])){

  $name= mysqli_real_escape_string($conn, $_POST['name']);
  $email= mysqli_real_escape_string($conn, $_POST['email']);
  $pass= mysqli_real_escape_string($conn, md5($_POST['password']));
  $cpass= mysqli_real_escape_string($conn, md5($_POST['cpassword']));

  $select_users=mysqli_query($conn,"SELECT * FROM 'register' WHERE email='$email' AND password='$pass'") or die('Query failed');
  if(mysqli_num_rows($select_users)>0){
    $message[]='user already exist!';
  }else{
    if($pass != $cpass){
      $message[]='Confirm password not matched!';
    }else{
      
      mysqli_query($conn, "INSERT INTO 'register'(name, email, password) VALUES('$name','$email','$cpass)") or die('Query failed');
      $message[]='Registered Successfully'; 
    }
  }

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login & Registration Form</title>
  <link rel="stylesheet" href="siup.css">
</head>
<body>
  <div class="message">
    <span>testing</span>
    <i class="fas fa-times" onclick="this.parentElement.remove();"</i>
  </div>

<?php
if(isset($message)){
  foreach($message as $message){
    
  }
}
?>
  <section class="header">
    <nav>
        <a href="home.html">
            <!--Optional Images Add Here If Required-->
        <div class="nav-links">
            <ul>
                <li><a href="home.html">HOME</a></li>
                <li><a href="signup.html">LOGIN</a></li>
                <li><a href="about.html">ABOUT US</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>
</section>
  <div class="container">
    <input type="checkbox" id="check">
    <div class="login form">
      <header>Login</header>
      <form>
        <input type="text" placeholder="Enter your email">
        <input type="password" placeholder="Enter your password">
        <a href="#">Forgot password?</a>
        <input type="button" class="button" value="Login">
      </form>
      <div class="signup">
        <span class="signup">Don't have an account?
         <label for="check">Signup</label>
        </span>
      </div>
    </div>
    <div class="registration form">
      <header>Signup</header>
      <form action="registration.php" method="post">
        <input type="text" placeholder="Enter your name" name="name">
        <input type="text" placeholder="Enter your email" name="email">
        <input type="password" placeholder="Create a password" name="password">
        <input type="password" placeholder="Confirm password" name="cpassword">
        <input type="button" name="button" value="Signup">
      </form>
      <div class="signup">
        <span class="signup">Already have an account?
         <label for="check">Login</label>
        </span>
      </div>
    </div>
  </div>
</body>
</html>
<?php
include_once 'db.php';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $message = $_POST['message'];
    $sql = "INSERT INTO details (name,mobile,message) VALUES ('$name','$mobile','$message')";
    if (mysqli_query($conn, $sql)) {
        header('Location: http://oxygenncr.in/#contact');
    } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

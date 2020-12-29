<?php

    function sanitize_my_email($field) {
        $field = filter_var($field, FILTER_SANITIZE_EMAIL);
        if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }

    $name = $_POST['name'];
    $visitor_email = $_POST['visitor-mail'];
    $message = $_POST['visitor-msg'];

    $to_email = 'prakhar.10.varshney@gmail.com';
    $subject = 'New Form Submission';
    $email_body    = '
            Name: '.$name.'
            Email: '.$visitor_email.'
            Message: '.nl2br($message).'
        ';
    
    

    $headers = 'From:noreply@pv.com';

    $secure_check = sanitize_my_email($to_email);
    if ($secure_check == false) {
        echo "Invalid input";
    } else { //send email 
        mail($to_email , $subject, $email_body, $headers);
        header("Location: index.html");
    }
?>

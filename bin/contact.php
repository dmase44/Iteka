<?php
// check if fields passed are empty
if(empty($_POST['name'])  	   ||
   empty($_POST['email']) 		||
   empty($_POST['subject'])    ||
   empty($_POST['message'])	 ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// create email body and send it
$to = 'dmase@iteka.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Iteka Contact Form:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have a new message from the Iteka website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nSubject: $subject\n\nMessage:\n$message";
$headers = "From: noreply@your-domain.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>

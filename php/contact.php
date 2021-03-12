<?php

include( './connect.php' );

use PHPMailer\PHPMailer\PHPMailer;

require '../PHPMailer/src/PHPMailer.php';

require '../PHPMailer/src/SMTP.php';

require '../PHPMailer/src/Exception.php';

$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if ( isset( $_POST['email'] ) ) {

    $email = mysqli_real_escape_string( $QMDCI, $_POST['email'] );
    $subject = mysqli_real_escape_string( $QMDCI, $_POST['subject'] );
    $message = mysqli_real_escape_string( $QMDCI, $_POST['message'] );
    $captcha = $_POST['g-recaptcha-response'];
    $Names = explode( ' ', $Name );

    $secretKey = "6LeDiF0aAAAAANKC6Le05vBClTRWKTfTGS9uXHrC";

    $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode( $secretKey ) .  '&response=' . urlencode( $captcha );
    $response = file_get_contents( $url );
    $responseKeys = json_decode( $response, true );

    if ( $responseKeys["success"] ) {

        $abc = "INSERT INTO contacts (Email, Subject, Message) VALUES ('$email', '$subject', '$message')";

        if ( mysqli_query( $QMDCI, $abc ) ) {
            
            $Return['status'] = 1;
            $Return['message'] = ' Message Has Been Saved.';

            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'mail.xcityworld.org';
            $mail->SMTPAuth = true;
            $mail->Port = 465;
            $mail->SMTPSecure = 'ssl';
            $mail->Username = 'devinegift.aa@xcityworld.org';
            $mail->Password = 'combination@1234';

            $mail->setFrom( $Email );
            $mail->addAddress( 'info@qmdci.com', "QMDCI Contact" );

            $mail->Subject = 'New Contact Message From QMDCI Website. ';
            $mail->isHTML( true );
            $mailContent = "$Subject... \n\n New Contact \n\n $Message";
            $mail->Body = $mailContent;
            if ( $mail->send() ) {
                $Return['Mailmessage'] = 'Sent';
            } else {
                $Return['Mailmessage'] = $mail->ErrorInfo;
            }

        } else {
            $Return['message'] = 'Server Error';
        }
    }

}

echo json_encode( $Return );

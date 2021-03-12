<?php

include( './connect.php' );

use PHPMailer\PHPMailer\PHPMailer;

require '../PHPMailer/src/PHPMailer.php';

require '../PHPMailer/src/SMTP.php';

require '../PHPMailer/src/Exception.php';

$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if ( isset( $_POST['First_Name'] ) ) {

    $First = mysqli_real_escape_string( $QMDCI, $_POST['First_Name'] );
    $Last = mysqli_real_escape_string( $QMDCI, $_POST['Last_Name'] );
    $Email = mysqli_real_escape_string( $QMDCI, $_POST['Email'] );
    $Phone = mysqli_real_escape_string( $QMDCI, $_POST['Phone'] );
    $Course = mysqli_real_escape_string( $QMDCI, $_POST['Course'] );
    $State = mysqli_real_escape_string( $QMDCI, $_POST['State'] );
    $Edu = mysqli_real_escape_string( $QMDCI, $_POST['Prev_education'] );
    $ref = mysqli_real_escape_string( $QMDCI, $_GET['ref'] );
    $image = $_FILES['image'];
    $Pay = 0;

    if ( !file_exists( '../Registered' ) ) {
        mkdir( '../Registered' );
    }

    $curl = curl_init();
    curl_setopt_array( $curl, array(
        CURLOPT_URL => "https://api.paystack.co/transaction/verify/$ref",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer sk_test_119d9feff2b11db7fe191acaab4cb93e95fd1e21",
            "Cache-Control: no-cache",
        ),
    ) );

    $response = curl_exec( $curl );
    $err = curl_error( $curl );
    curl_close( $curl );
    $response = json_decode( $response, true );
    $Return['response'] = $response;
    if ( $response['data']['status'] == 'success' ) {
        $Pay = 1;
        $Return['Payment'] = 'Success';
    } else {
        $Pay = 1;
        $Return['Payment'] = 'Failed';
    }
    $Path = '';
    $filename = $Email.'_'.$image['name'];
    if ( move_uploaded_file( $image['tmp_name'], '../Registered/'.$filename ) ) {
        $Path = '../Registered/'.$filename;
        $Inse = "INSERT INTO course_registers (First_Name, Last_Name, Email, Phone, Course, State, Education, Image, Payment_Status) VALUES ('$First', '$Last', '$Email', '$Phone', '$Course', $State', '$Edu', '$Path', '$Pay')";

        if ( mysqli_query( $QMDCI, $Inse ) ) {
            $Return['status'] = 1;
            $Return['message'] = 'Payment Confirmed';

            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'mail.xcityworld.org';
            $mail->SMTPAuth = true;
            $mail->Port = 465;
            $mail->SMTPSecure = 'ssl';
            $mail->Username = 'devinegift.aa@xcityworld.org';
            $mail->Password = 'combination@1234';

            $mail->setFrom( 'info@qmdci.com', "QMDCI Contact" );
            $mail->addAddress( 'info@qmdci.com', "QMDCI Contact" );
            $mail->addAddress( $Email, "$First $Last" );

            $mail->Subject = 'New Course Registered';
            $mail->isHTML( true );
            $mailContent = "";
            $mail->Body = $mailContent;
            if ( $mail->send() ) {
                $Return['Mailmessage'] = 'Sent';
            } else {
                $Return['Mailmessage'] = $mail->ErrorInfo;
            }
        } else {
            $Return['message'] = 'Server Error';
        }

    } else {
        $Return['message'] = 'File Upload Error';
    }

    echo json_encode( $Return );

}
